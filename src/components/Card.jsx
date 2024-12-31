const Card = ({
  title,
  job_description,
  job_qualification,
  job_type,
  job_tenure,
  job_status,
  company_name,
  company_image_url,
  company_city,
  salary_min,
  salary_max,
}) => {
  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="justify-center bg-gray-100 flex items-center py-4">
        <img
          src={company_image_url}
          alt={company_name}
          className="h-16 w-16 object-contain"
        />
      </div>
      <div className="p-3 md:p-6">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">{title}</h3>
        <div className="">
          <p className="text-xs sm:text-sm md:text-base text-gray-700">{job_qualification}</p>
        </div>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600">{job_description}</p>

        <div className="flex justify-between gap-4">
          <div className="mt-2 flex gap-1 items-center">
            <p className="font-medium text-xs sm:text-sm md:text-base text-gray-700">
              {company_name} - <span className="text-xs sm:text-sm md:text-base text-gray-500">{company_city}</span>
            </p>
          </div>
        </div>

        <div className="space-y flex gap-1">
          <p className="text-xs sm:text-sm md:text-base text-gray-700">{job_type},</p>
          <p className="text-xs sm:text-sm md:text-base text-gray-700">{job_tenure},</p>
          <p className="text-xs sm:text-sm md:text-base text-gray-700">
            {job_status === 1 ? "Active" : "Inactive"}
          </p>
        </div>

        <div className="mt-2">
          <p className="text-xs sm:text-sm md:text-base text-gray-700">
            <strong>Salary:</strong> IDR {salary_min.toLocaleString()} - IDR{" "}
            {salary_max.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
