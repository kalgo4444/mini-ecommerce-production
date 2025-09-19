import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, memo, SetStateAction } from "react";
import Select, { SingleValue } from "react-select";

interface IProps {
  order: string;
  setOrder: Dispatch<SetStateAction<string>>;
}

interface OptionType {
  value: string;
  label: string;
}

const ProductSelect = (props: IProps) => {
  const { order, setOrder } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params_order = searchParams.get("order");
  if (params_order) {
    setOrder(params_order);
  }

  const options: OptionType[] = [
    { value: "latest", label: "Latest" },
    { value: "expensive", label: "Expensive" },
    { value: "cheapest", label: "Cheapest" },
  ];

  const handleChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption) {
      setOrder(selectedOption.value);

      // Create new URLSearchParams object
      const params = new URLSearchParams(searchParams.toString());
      params.set("order", selectedOption.value);

      // Update the URL with new search params
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  const getValue = () =>
    options.find((option) => option.value === order) || null;

  return (
    <div className="container">
      <Select
        className="max-w-[250px] w-full"
        value={getValue()}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default memo(ProductSelect);
