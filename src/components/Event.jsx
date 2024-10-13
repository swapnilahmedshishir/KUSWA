const Event = () => {
  return (
    <>
      <div className="mx-auto  my-28 flex items-center justify-center px-8">
        <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
          <div
            className="w-full h-[20rem] bg-center bg-cover rounded-t"
            style={{
              backgroundImage:
                "url(https://viralsolutions.net/wp-content/uploads/2019/06/shutterstock_749036344.jpg)",
            }}
          ></div>
          <div className="flex flex-col w-full md:flex-row">
            <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
              <div className="md:text-3xl">Oct</div>
              <div className="md:text-6xl">15</div>
              <div className="md:text-xl">9 pm</div>
            </div>
            <div className="p-4 font-normal text-gray-800 md:w-3/4">
              <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
                2024 Quiz
              </h1>
              <p className="leading-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                eveniet magni dolorum cupiditate corrupti itaque officiis nisi?
                Expedita, nostrum illum.
              </p>
              <div className="flex flex-row items-center mt-4 text-gray-700">
                <div className="w-1/2">Mercedes-Benz Superdome</div>
                <div className="w-1/2 flex justify-end">
                  <img
                    src="https://collegefootballplayoff.com/images/section_logo.png"
                    alt=""
                    className="w-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
