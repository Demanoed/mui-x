import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MuiDateSectionName, FieldSelectedSections } from '@mui/x-date-pickers';
import { DateField } from '@mui/x-date-pickers/DateField';

export default function ControlledSelectedSections() {
  const [selectedSections, setSelectedSections] =
    React.useState<FieldSelectedSections>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const setSelectedDateSectionName = (
    selectedDateSectionName: MuiDateSectionName,
  ) => {
    inputRef.current?.focus();
    setSelectedSections(selectedDateSectionName);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={() => setSelectedDateSectionName('month')}
          >
            Pick month
          </Button>
          <Button
            variant="outlined"
            onClick={() => setSelectedDateSectionName('day')}
          >
            Pick day
          </Button>
          <Button
            variant="outlined"
            onClick={() => setSelectedDateSectionName('year')}
          >
            Pick year
          </Button>
        </Stack>
        <DateField
          inputRef={inputRef}
          selectedSections={selectedSections}
          onSelectedSectionsChange={setSelectedSections}
        />
      </Stack>
    </LocalizationProvider>
  );
}
