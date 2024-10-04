"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1 pt-8">
					<div className="flex justify-center mb-6">
						<Image src="https://reqlut2.s3.amazonaws.com/uploads/logos/8f30ce18a7f94558d07c4cf48ba0b5692df65734-5242880.png" alt="Logo" width={120} height={80} className="rounded-full bg-gray-200" />
					</div>
					<CardTitle className="text-3xl font-bold text-center">Iniciar sesión</CardTitle>
					<CardDescription className="text-center text-gray-500">Ingresa al sistema integrado de logística</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4 px-6">
					<div className="space-y-2">
						<Label htmlFor="email">Correo electrónico</Label>
						<Input id="email" type="email" placeholder="hola@summagold.com" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Contraseña</Label>
						<div className="relative">
							<Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
							<Button type="button" variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
								{showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
							</Button>
						</div>
					</div>
				</CardContent>
				<CardFooter className="flex flex-col space-y-4 px-6 pb-8 ">
					<Button className="w-full bg-[#18293A] hover:bg-[#18293A]/90">Iniciar sesión</Button>
					<div className="text-sm text-center text-gray-500">
						¿No tienes una cuenta?{" "}
						<a href="#" className="text-primary hover:underline">
							Regístrate
						</a>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
