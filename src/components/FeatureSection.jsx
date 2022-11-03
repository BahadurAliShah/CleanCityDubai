import Image from "next/future/image";

export function FeatureSection(props) {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        {props.features["title"].map((title) => (
                            // eslint-disable-next-line react/jsx-key
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
                        ))}
                        <p className="text-xl text-gray-300">
                            {props.features["description"]}
                        </p>
                    </div>
                    <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                        {props.features["features"].map((feat) => (
                            <li key={feat.title} className="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                                <div className="space-y-6 xl:space-y-10">
                                    <Image className="mx-auto h-40 w-40 xl:h-56 xl:w-56" src={feat.icon} alt="" />
                                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3 className="text-white">{feat.title}</h3>
                                            <p className="text-indigo-400">{feat.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
