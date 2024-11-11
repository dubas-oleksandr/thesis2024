import type { FC } from "react";

import { useState } from "react";
import { Button, Card, Stack, IconButton, Typography } from "@mui/material";
import Slider from "rc-slider";
import CriteriaPieChart from "../charts/CriteriaPieChart.tsx";
import { Plus, Minus } from "react-feather";

import "rc-slider/assets/index.css";

const labels = [
  "Safety",
  "Cost",
  "Climate",
  "Transport",
  "Cultural Attractions",
];

export type CriteriaSettingsProps = {
  onSave: () => void;
};

const CriteriaSettings: FC<CriteriaSettingsProps> = ({ onSave }) => {
  const [value, setValue] = useState([0, 20, 40, 60, 80, 100]);

  const generateData = () => {
    const data = [];
    for (let i = 0; i < labels.length; i++) {
      data.push({
        id: i,
        label: labels[i],
        value: value[i + 1] - value[i],
      });
    }
    return data;
  };

  const handleChange = (newValue: number | number[]) => {
    const updatedValues = [...(newValue as number[])];

    // Ensure the first and last values remain fixed
    updatedValues[0] = 0;
    updatedValues[updatedValues.length - 1] = 100;

    // Ensure the middle values do not overlap
    for (let i = 1; i < updatedValues.length - 1; i++) {
      if (updatedValues[i] <= updatedValues[i - 1]) {
        updatedValues[i] = updatedValues[i - 1] + 1;
      }
      if (updatedValues[i] >= updatedValues[i + 1]) {
        updatedValues[i] = updatedValues[i + 1] - 1;
      }
    }

    setValue(updatedValues);
  };

  const handleIncrement = (index: number) => {
    const updatedValues = [...value];
    if (
      index < updatedValues.length - 1 &&
      updatedValues[index] < updatedValues[index + 1] - 1
    ) {
      updatedValues[index]++;
      setValue(updatedValues);
    }
  };

  const handleDecrement = (index: number) => {
    const updatedValues = [...value];
    if (index > 0 && updatedValues[index] > updatedValues[index - 1] + 1) {
      updatedValues[index]--;
      setValue(updatedValues);
    }
  };

  const trackStyle = [
    { backgroundColor: "#02b2af" },
    { backgroundColor: "#2e96ff" },
    { backgroundColor: "#b800d8" },
    { backgroundColor: "#60009b" },
    { backgroundColor: "#2731c8" },
  ];

  const handleStyle = [
    { borderColor: "grey" },
    { borderColor: "grey" },
    { borderColor: "grey" },
    { borderColor: "grey" },
    { borderColor: "grey" },
    { borderColor: "grey" },
  ];

  const railStyle = { backgroundColor: "gray" };

  return (
    <Stack spacing={2}>
      <CriteriaPieChart data={generateData()} />
      <Slider
        range
        defaultValue={[0, 20, 40, 60, 80, 100]}
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
        trackStyle={trackStyle}
        handleStyle={handleStyle}
        railStyle={railStyle}
      />
      <Stack spacing={1}>
        {labels.map((label, index) => (
          <Card key={index}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              py={1.5}
              px={2}
            >
              <Typography variant="h6">{label}</Typography>
              <Stack direction="row" gap={1}>
                <IconButton
                  onClick={() =>
                    index + 1 === labels.length
                      ? handleIncrement(index)
                      : handleDecrement(index + 1)
                  }
                >
                  <Minus />
                </IconButton>
                <IconButton
                  onClick={() =>
                    index + 1 === labels.length
                      ? handleDecrement(index)
                      : handleIncrement(index + 1)
                  }
                >
                  <Plus />
                </IconButton>
              </Stack>
            </Stack>
          </Card>
        ))}
      </Stack>
      <Button variant="contained" color="primary" onClick={onSave}>
        Save
      </Button>
    </Stack>
  );
};

export default CriteriaSettings;
