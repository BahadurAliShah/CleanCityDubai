import Image from "next/future/image";

export function Incentive(props) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
                    <div className="mx-auto max-w-xl lg:max-w-none">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                {props.incentives.title}
                            </h2>
                        </div>
                        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
                            {props.incentives["features"].map((incentive) => (
                                <div key={incentive.title} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                                    <div className="sm:flex-shrink-0">
                                        <div className="flow-root">
                                            <Image className="mx-auto h-70 w-80 xl:h-90 xl:w-100" src={incentive.icon} alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                                        <h3 className="text-sm font-medium text-gray-900">{incentive.title}</h3>
                                        <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}