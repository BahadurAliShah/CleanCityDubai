import Image from "next/future/image";

export function LogoCloud(props) {
    return (
        <div id={"clients"} className="bg-white">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-lg font-semibold text-gray-600">
                    {props.logos["title"]}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    {props.logos.logos.map((logo) => (
                        // eslint-disable-next-line react/jsx-key
                    <div className="col-span-1 flex justify-center bg-gray-900 py-24 px-24">
                        <Image
                            className="max-h-24"
                            src={logo}
                            alt="Workcation"
                        />
                    </div>
                    ))}
                    {/*<div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">*/}
                    {/*    <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />*/}
                    {/*</div>*/}
                    {/*<div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">*/}
                    {/*    <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />*/}
                    {/*</div>*/}
                    {/*<div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">*/}
                    {/*    <img className="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel" />*/}
                    {/*</div>*/}
                    {/*<div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">*/}
                    {/*    <img*/}
                    {/*        className="max-h-12"*/}
                    {/*        src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"*/}
                    {/*        alt="StaticKit"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">*/}
                    {/*    <img*/}
                    {/*        className="max-h-12"*/}
                    {/*        src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"*/}
                    {/*        alt="Statamic"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}