import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Bell } from "lucide-react";
import Image from "next/image";

export default function OrderStatusAlert() {
	return (
		<div className="container mx-auto p-4">
			<Card className="max-w-2xl mx-auto">
				<CardHeader className="bg-[#18293A] text-white">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Bell className="h-6 w-6" />
							<CardTitle>Actualización de Estado de Pedido</CardTitle>
						</div>
						<Image
							src="https://reqlut2.s3.amazonaws.com/uploads/logos/8f30ce18a7f94558d07c4cf48ba0b5692df65734-5242880.png"
							alt="Logo de la empresa"
							width={80}
							height={40}
							className="rounded-full bg-white p-1"
						/>
					</div>
				</CardHeader>
				<CardContent className="mt-4 space-y-4">
					<div className="flex justify-between items-center">
						<h2 className="text-lg font-semibold">Pedido #12345</h2>
						<Badge variant="secondary">Actualizado</Badge>
					</div>
					<Separator />
					<div className="space-y-2">
						<p className="font-medium">Estimado Cliente,</p>
						<p>Le informamos que el estado de su pedido ha sido actualizado. A continuación, encontrará los detalles:</p>
					</div>
					<div className="bg-muted p-4 rounded-md">
						<p className="font-semibold">
							Nuevo Estado: <span className="text-primary">En Tránsito</span>
						</p>
						<p className="text-sm text-muted-foreground mt-2">Su pedido ha salido de nuestro almacén y está en camino a su dirección de entrega.</p>
					</div>
					<div className="space-y-2">
						<p>Detalles adicionales:</p>
						<ul className="list-disc list-inside space-y-1 text-sm">
							<li>Fecha estimada de entrega: 15 de octubre de 2024</li>
							<li>Empresa de transporte: Envíos Rápidos S.A.</li>
							<li>Número de seguimiento: TR-9876543210</li>
						</ul>
					</div>
					<Separator />
					<div className="text-sm text-muted-foreground">
						<p>Si tiene alguna pregunta o inquietud, no dude en contactar a nuestra área de logística.</p>
						<p className="mt-2">Gracias por su preferencia.</p>
					</div>
					<div className="bg-muted p-4 rounded-md text-sm">
						<p className="font-semibold">Lennin Ortiz Mejía </p>
						<p>Email: lortiz@summagold.com</p>
						<p>Teléfono: (01) 234-5678</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
