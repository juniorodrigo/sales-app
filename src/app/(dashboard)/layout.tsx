"use client";

import { useState, useEffect, useRef } from "react";
import { Bell, ChevronLeft, ChevronRight, LogOut, Menu, Search, Settings, ShoppingCart, Users, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LayoutProps = {
	children: React.ReactNode;
};

export default function DefaultLayout({ children }: LayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const sidebarRef = useRef<HTMLDivElement>(null);

	const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && sidebarOpen) {
				setSidebarOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [sidebarOpen]);

	return (
		<div className="flex h-screen overflow-hidden bg-gray-100">
			{/* Sidebar */}
			<aside ref={sidebarRef} className={cn("bg-white transition-all duration-300 ease-in-out flex flex-col h-full", sidebarOpen ? "w-64" : "w-20")}>
				<div className="flex items-center justify-between p-4">
					{sidebarOpen && <Image src="https://reqlut2.s3.amazonaws.com/uploads/logos/8f30ce18a7f94558d07c4cf48ba0b5692df65734-5242880.png" alt="Summa Gold Logo" width={120} height={50} />}
					<Button variant="ghost" size="icon" onClick={toggleSidebar}>
						{sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
					</Button>
				</div>
				<nav className="flex-grow overflow-y-auto">
					<div className="space-y-2 p-2">
						<h3 className={cn("px-4 text-xs font-semibold text-gray-500 uppercase", !sidebarOpen && "hidden")}>Gestión</h3>
						<Button variant="ghost" className="w-full justify-start">
							<ShoppingCart className="mr-2 h-4 w-4" />
							<span className={cn(!sidebarOpen && "hidden")}>Solicitudes</span>
						</Button>
						<Button variant="ghost" className="w-full justify-start">
							<Users className="mr-2 h-4 w-4" />
							<span className={cn(!sidebarOpen && "hidden")}>Usuarios</span>
						</Button>
					</div>
				</nav>
				<div className="p-2">
					<Button variant="ghost" className="w-full justify-start">
						<Settings className="mr-2 h-4 w-4" />
						<span className={cn(!sidebarOpen && "hidden")}>Configuración</span>
					</Button>
				</div>
			</aside>

			{/* Main Content */}
			<div className="flex flex-col flex-grow overflow-hidden">
				{/* Header */}
				<header className="bg-[#18293A] shadow-sm z-10 sticky top-0">
					<div className="flex items-center justify-between p-4">
						<div className="flex items-center space-x-4">
							<Button variant="ghost" size="icon" className="md:hidden text-white" onClick={toggleSidebar}>
								<Menu />
							</Button>
							<div className="relative bg-white rounded">
								<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
								<Input type="search" placeholder="Buscar..." className="pl-8 w-full md:w-[300px]" />
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<Image src="https://summagold.com/wp-content/uploads/2021/04/cropped-favicon-32x32.png" alt="Summa Gold Logo" width={30} height={30} className="mr-4" />
							<Button variant="ghost" size="icon" className="text-white">
								<Bell />
							</Button>
							<Button variant="ghost" size="icon" className="text-white">
								<MessageSquare />
							</Button>
							<Popover>
								<PopoverTrigger asChild>
									<Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
										<Avatar>
											<AvatarImage src="/placeholder-user.jpg" alt="Usuario" />
											<AvatarFallback>U</AvatarFallback>
										</Avatar>
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-80" align="end" sideOffset={5}>
									<div className="flex flex-col space-y-4">
										<div className="flex items-center space-x-4">
											<Avatar>
												<AvatarImage src="/placeholder-user.jpg" alt="Usuario" />
												<AvatarFallback>U</AvatarFallback>
											</Avatar>
											<div>
												<h4 className="text-sm font-semibold">Juan Pérez</h4>
												<p className="text-sm text-gray-500">juan.perez@ejemplo.com</p>
											</div>
										</div>
										<DropdownMenuSeparator />
										<Button variant="ghost" className="w-full justify-start">
											<User className="mr-2 h-4 w-4" />
											<span>Mi Perfil</span>
										</Button>
										<Button variant="ghost" className="w-full justify-start">
											<Settings className="mr-2 h-4 w-4" />
											<span>Configuración de Cuenta</span>
										</Button>
										<Button variant="ghost" className="w-full justify-start">
											<LogOut className="mr-2 h-4 w-4" />
											<span>Cerrar Sesión</span>
										</Button>
									</div>
								</PopoverContent>
							</Popover>
						</div>
					</div>
				</header>

				{/* Page Content */}
				<main className="flex-grow overflow-y-auto">
					<div className="p-4">{children}</div>
				</main>
			</div>
		</div>
	);
}
