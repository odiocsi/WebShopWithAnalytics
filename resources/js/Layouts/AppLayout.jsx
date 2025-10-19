import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AppLayout({ header, children }) {
    const { auth } = usePage().props; // get Inertia-shared props
    const user = auth?.user ?? null;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const safeRoute = (name) => {
        try {
            return route(name);
        } catch {
            return '#';
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <nav className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between items-center">
                        <div className="flex items-center">
                            <Link href={safeRoute('products.index')} className="flex items-center space-x-2">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                <span className="font-semibold text-gray-800 text-lg">
                                    MySiteName
                                </span>
                            </Link>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink href={safeRoute('products.index')} active={route().current?.('products.index')}>Home</NavLink>
                                {user && <NavLink href={safeRoute('cart.index')}>Cart</NavLink>}

                                {user?.is_admin && (
                                    <>
                                        <NavLink href={safeRoute('users.index')}>Users</NavLink>
                                        <NavLink href={safeRoute('orders.index')}>Orders</NavLink>
                                        <NavLink href={safeRoute('analytics.index')}>Analytics</NavLink>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center">
                            {user ? (
                                <div className="relative ms-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}
                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href={safeRoute('profile.edit')}>
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={safeRoute('logout')}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            ) : (
                                <NavLink href={safeRoute('login')}>Login</NavLink>
                            )}
                        </div>

                        <div className="flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown((open) => !open)
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    {!showingNavigationDropdown ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {showingNavigationDropdown && (
                    <div className="sm:hidden border-t border-gray-200">
                        <div className="space-y-1 pb-3 pt-2">
                            <ResponsiveNavLink href={safeRoute('home')}>
                                Home
                            </ResponsiveNavLink>

                            {user?.is_admin && (
                                <>
                                    <ResponsiveNavLink href={safeRoute('users.index')}>
                                        Users
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink href={safeRoute('orders.index')}>
                                        Orders
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink href={safeRoute('analytics.index')}>
                                        Analytics
                                    </ResponsiveNavLink>
                                </>
                            )}
                        </div>

                        <div className="border-t border-gray-200 pb-1 pt-4">
                            {user ? (
                                <>
                                    <div className="px-4">
                                        <div className="text-base font-medium text-gray-800">
                                            {user.name}
                                        </div>
                                        <div className="text-sm font-medium text-gray-500">
                                            {user.email}
                                        </div>
                                    </div>

                                    <div className="mt-3 space-y-1">
                                        <ResponsiveNavLink href={safeRoute('profile.edit')}>
                                            Profile
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink
                                            method="post"
                                            href={safeRoute('logout')}
                                            as="button"
                                        >
                                            Log Out
                                        </ResponsiveNavLink>
                                    </div>
                                </>
                            ) : (
                                <div className="px-4 py-2">
                                    <ResponsiveNavLink href={safeRoute('login')}>
                                        Login
                                    </ResponsiveNavLink>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="p-4">{children}</main>
        </div>
    );
}
