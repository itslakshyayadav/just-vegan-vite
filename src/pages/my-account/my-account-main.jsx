import { Link, Outlet } from "react-router-dom";

export default function MyAccountMain() {

    const accountPage = [
        {
            name: "My Account",
            to: "/my-account/my-account",
        },
        {
            name: "My Address",
            to: "/my-account/my-address",
        },
        {
            name: "My Orders",
            to: "/my-account/my-orders",
        },
        {
            name: "My Favourite",
            to: "/my-account/my-favourite",
        },
        {
            name: "My Reviews",
            to: "/my-account/my-reviews",
        },


    ]
    return (
        <>

            <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6">

                <div className="grid grid-cols-9  ">
                    <div className="flex flex-col  ">
                        {accountPage.map((link, index) => {
                            return (
                                <div key={"navbar" + index} className=" w-48  py-3 text-black px-5 border   ">
                                    <Link
                                        to={link.to}
                                        className="  "
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-span-8 ">
                        <Outlet></Outlet>

                    </div>


                </div>

            </div>
        </>
    )
}