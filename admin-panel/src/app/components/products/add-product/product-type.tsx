import React,{useEffect} from "react";
import ReactSelect from "react-select";
import { FieldErrors, Controller, Control } from "react-hook-form";
import ErrorMsg from "../../common/error-msg";

// prop type
type IPropType = {
  errors: FieldErrors<any>;
  control: Control;
  setSelectProductType: React.Dispatch<React.SetStateAction<string>>;
  default_value?:string;
};

const ProductType = ({
  errors,
  control,
  default_value,
  setSelectProductType,
}: IPropType) => {
  // handleSelectProduct
  const handleSelectProduct = (value: string) => {
    setSelectProductType(value);
  };
  // set default product
  useEffect(() => {
    if(default_value){
      setSelectProductType(default_value)
    }
  }, [default_value, setSelectProductType])
  
  return (
    <>
      <Controller
        name="productType"
        control={control}
        rules={{
          required: default_value
            ? false
            : "Бүтээгдэхүүний төрөл шаардлагатай!",
        }}
        render={({ field }) => (
          <ReactSelect
            {...field}
            value={field.value}
            defaultValue={
              default_value
                ? {
                    label: default_value,
                    value: default_value,
                  }
                : {
                    label: "Сонгох..",
                    value: 0,
                  }
            }
            onChange={(selectedOption) => {
              field.onChange(selectedOption);
              handleSelectProduct(selectedOption?.value);
            }}
            options={[
              { value: "electronics", label: "Electronics" },
              { value: "fashion", label: "Fashion" },
              { value: "beauty", label: "Beauty" },
              { value: "jewelry", label: "Jewelry" },
            ]}
          />
        )}
      />
      <ErrorMsg msg={errors?.productType?.message as string} />
    </>
  );
};

export default ProductType;
