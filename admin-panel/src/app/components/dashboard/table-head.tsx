import React from "react";

function ThItem({ title,cls }: { title: string,cls?:string }): React.JSX.Element {
  return (
    <th
      scope="col"
      className={`px-3 py-3 text-tiny text-text2 uppercase font-semibold ${cls}`}
    >
      {title}
    </th>
  );
}

const TableHead = () => {
  return (
    <thead className="bg-white">
      <tr className="border-b border-gray6 text-tiny">
      <ThItem title="ДУГААР" />
<ThItem title="Огноо" />
<ThItem title="НЭР" />
<ThItem title="АРГА" />
<ThItem title="ҮНЭ" />
<ThItem title="БАЙДАЛ" />
<ThItem title="ҮЙЛДЭЛ" />
<ThItem title="НӨАТ" cls="text-end" />
      </tr>
    </thead>
  );
};

export default TableHead;
