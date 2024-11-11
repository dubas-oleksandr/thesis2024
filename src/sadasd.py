class Topsis:
    def __init__(self, data, weights, beneficial_criteria):
        """
        data: DataFrame, де кожен рядок - це альтернатива, а кожен стовпець - критерій.
        weights: Список вагових коефіцієнтів для кожного критерію.
        beneficial_criteria: Ліст булевих значень для кожного критерію (True, якщо критерій бажаний).
        """
        self.data = data
        self.weights = weights
        self.beneficial_criteria = beneficial_criteria
        self.normalized_data = None
        self.ideal_best = None
        self.ideal_worst = None
        self.distance_best = None
        self.distance_worst = None
        self.performance_score = None

    def normalize_data(self):
        """Нормалізація даних за допомогою методу нормалізації вектора."""
        norm = np.sqrt((self.data ** 2).sum())
        self.normalized_data = self.data.copy()

        for column in self.data.columns:
            self.normalized_data[column] = self.data[column] / norm[column]

    def weighted_normalization(self):
        """Зважена нормалізація з урахуванням вагових коефіцієнтів."""
        self.normalized_data = self.normalized_data.copy()

        for i, column in enumerate(self.normalized_data.columns):
            self.normalized_data[column] = self.normalized_data[column] * self.weights[i]

    def find_ideal_best_worst(self):
        """Знаходження ідеального найкращого та найгіршого значення."""
        self.ideal_best = {}
        self.ideal_worst = {}

        for i, column in enumerate(self.normalized_data.columns):
            if self.beneficial_criteria[i]:
                self.ideal_best[column] = self.normalized_data[column].max()
                self.ideal_worst[column] = self.normalized_data[column].min()
            else:
                self.ideal_best[column] = self.normalized_data[column].min()
                self.ideal_worst[column] = self.normalized_data[column].max()

    def calculate_distances(self):
        """Обчислення відстаней до ідеального найкращого та найгіршого рішень."""
        self.distance_best = []
        self.distance_worst = []

        for index, row in self.normalized_data.iterrows():
            sum_best = 0
            sum_worst = 0

            for column in self.normalized_data.columns:
                sum_best += (row[column] - self.ideal_best[column]) ** 2
                sum_worst += (row[column] - self.ideal_worst[column]) ** 2

            self.distance_best.append(np.sqrt(sum_best))
            self.distance_worst.append(np.sqrt(sum_worst))

    def calculate_performance_score(self):
        """Обчислення показників ефективності для кожної альтернативи."""
        self.performance_score = []

        for d_best, d_worst in zip(self.distance_best, self.distance_worst):
            score = d_worst / (d_best + d_worst)
            self.performance_score.append(score)

        return self.performance_score

    def run(self):
        """Метод для запуску всіх кроків алгоритму TOPSIS і повернення результату."""
        self.normalize_data()
        self.weighted_normalization()
        self.find_ideal_best_worst()
        self.calculate_distances()
        return self.calculate_performance_score()