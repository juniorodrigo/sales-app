"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
// import { toast } from "@/components/ui/use-toast";

export default function CreateUserPage() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		dni: "",
		email: "",
		phone: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		toast({
			title: "Usuario creado",
			description: "El usuario ha sido creado exitosamente.",
		});
		setFormData({
			firstName: "",
			lastName: "",
			dni: "",
			email: "",
			phone: "",
		});
	};

	return (
		<div className="container mx-auto p-4">
			<div className="max-w-3xl mx-auto">
				<Card className="w-full">
					<CardHeader>
						<CardTitle className="text-2xl font-bold">Crear Nuevo Usuario</CardTitle>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="firstName">Nombres</Label>
									<Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
								</div>
								<div className="space-y-2">
									<Label htmlFor="lastName">Apellidos</Label>
									<Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
								</div>
							</div>
							<div className="space-y-2">
								<Label htmlFor="dni">DNI</Label>
								<Input id="dni" name="dni" value={formData.dni} onChange={handleInputChange} required />
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Correo Electrónico</Label>
								<Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
							</div>
							<div className="space-y-2">
								<Label htmlFor="phone">Teléfono</Label>
								<Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
							</div>
							<Button type="submit" className="w-full">
								Crear Usuario
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
