const TableHead = ({title}) => {
  return (
    <th scope="col" className="border">
      <div className="flex items-center p-2">
          {title}
      </div>
    </th>
  );
};

export default TableHead;
