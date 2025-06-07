import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller } from "react-hook-form";

interface AccordionFilterItemProps {
  label: string;
  name: string;
  options: string[];
  control: any;
  optionLabelMap?: (option: string) => string;
  renderOption?: (option: string) => JSX.Element;
}
const AccordionFilterItem = ({
  label,
  name,
  options,
  control,
  optionLabelMap = (option) => option,
  renderOption,
}: AccordionFilterItemProps) => {
  return (
    <AccordionItem
      value={name}
      className="bg-primary/10 dark:bg-gray-900 text-default-900"
    >
      <AccordionTrigger className="text-left font-medium">
        <span>{label}</span>
      </AccordionTrigger>
      <AccordionContent>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <div className="space-y-3">
              {options.map((option) => (
                <Checkbox
                  key={option}
                  onCheckedChange={(checked) => {
                    if (Array.isArray(field.value)) {
                      // For array fields like availability or specialties
                      const newValue = checked
                        ? [...(field.value ?? []), option]
                        : (field.value ?? []).filter((val) => val !== option);
                      field.onChange(newValue);
                    } else {
                      // For single value fields like gender
                      field.onChange(checked ? option : undefined);
                    }
                  }}
                  checked={
                    Array.isArray(field.value)
                      ? (field.value ?? []).includes(option)
                      : field.value === option
                  }
                >
                  {/* Use renderOption if it's provided, otherwise use optionLabelMap */}
                  {renderOption ? renderOption(option) : optionLabelMap(option)}
                </Checkbox>
              ))}
            </div>
          )}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionFilterItem;
