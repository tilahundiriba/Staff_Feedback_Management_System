function EmployeeCard({
  employee,
  selected,
  onSelect,
}) {
  return (
    <div
      onClick={() => onSelect(employee.id)}
      className={`border rounded-xl p-3 cursor-pointer flex justify-between items-center
      ${
        selected
          ? "border-blue-500 bg-blue-50"
          : ""
      }`}
    >

      <div className="flex gap-3">

        <img
          src={employee.image}
          alt={employee.name}
          className="w-12 h-12 rounded-full"
        />

        <div>

          <h3 className="font-semibold">
            {employee.name}
          </h3>

          <p className="text-sm text-gray-500">
            {employee.position}
          </p>

          <p className="text-xs text-gray-400">
            {employee.department}
          </p>

        </div>

      </div>

      <input
        type="radio"
        checked={selected}
        readOnly
      />

    </div>
  );
}

export default EmployeeCard;