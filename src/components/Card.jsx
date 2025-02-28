export default function Card(props) {
      return (
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <h3 className="text-3xl font-bold mb-4">{props.title}</h3>
                  <p className="text-gray-600 text-center">
                        {props.children}
                        <img src={props.img} alt="J&J Home Improvement" className="mt-4 rounded-md shadow-sm w-full " />
                  </p>
            </div>
      );
}
