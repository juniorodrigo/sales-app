"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Trash2, Upload } from "lucide-react";

interface LineItem {
	id: number;
	article: string;
	description: string;
	quantity: number;
	unit: string;
	price: number;
}

export default function CrearOrdenPage() {
	const [orderNumber, setOrderNumber] = useState("");
	const [supplier, setSupplier] = useState("");
	const [requestDate, setRequestDate] = useState("");
	const [deliveryDate, setDeliveryDate] = useState("");
	const [description, setDescription] = useState("");
	const [requester, setRequester] = useState("");
	const [deliveryType, setDeliveryType] = useState("");
	const [deliveryLocation, setDeliveryLocation] = useState("");
	const [buyer, setBuyer] = useState("");
	const [requirementType, setRequirementType] = useState("");
	const [businessUnit, setBusinessUnit] = useState("");
	const [justification, setJustification] = useState("");
	const [attachments, setAttachments] = useState<File[]>([]);
	const [lineItems, setLineItems] = useState<LineItem[]>([]);
	const [newItem, setNewItem] = useState<LineItem>({
		id: 0,
		article: "",
		description: "",
		quantity: 0,
		unit: "",
		price: 0,
	});

	const addLineItem = () => {
		if (newItem.article && newItem.description && newItem.quantity > 0 && newItem.unit && newItem.price > 0) {
			setLineItems([...lineItems, { ...newItem, id: Date.now() }]);
			setNewItem({
				id: 0,
				article: "",
				description: "",
				quantity: 0,
				unit: "",
				price: 0,
			});
		}
	};

	const removeLineItem = (id: number) => {
		setLineItems(lineItems.filter((item) => item.id !== id));
	};

	const calculateTotal = () => {
		return lineItems.reduce((total, item) => total + item.quantity * item.price, 0);
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setAttachments(Array.from(e.target.files));
		}
	};

	return (
		<div className="container mx-auto p-4 space-y-6">
			<Card className="w-full">
				<CardHeader>
					<CardTitle className="text-3xl font-bold">Crear nueva orden de compra</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div>
							<Label htmlFor="orderNumber">Número de Orden</Label>
							<Input id="orderNumber" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} />
						</div>
						<div>
							<Label htmlFor="supplier">Proveedor</Label>
							<Input id="supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} />
						</div>
						<div>
							<Label htmlFor="requester">Solicitante</Label>
							<Input id="requester" value={requester} onChange={(e) => setRequester(e.target.value)} />
						</div>
						<div>
							<Label htmlFor="requestDate">Fecha de Solicitud</Label>
							<Input id="requestDate" type="date" value={requestDate} onChange={(e) => setRequestDate(e.target.value)} />
						</div>
						<div>
							<Label htmlFor="deliveryDate">Fecha de Entrega</Label>
							<Input id="deliveryDate" type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} />
						</div>
						<div>
							<Label htmlFor="buyer">Comprador</Label>
							<Input id="buyer" value={buyer} onChange={(e) => setBuyer(e.target.value)} />
						</div>
						<div>
							<Label htmlFor="deliveryType">Tipo de Entrega</Label>
							<Select onValueChange={setDeliveryType}>
								<SelectTrigger id="deliveryType">
									<SelectValue placeholder="Seleccionar tipo de entrega" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="interna">Interna</SelectItem>
									<SelectItem value="externa">Externa</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div>
							<Label htmlFor="deliveryLocation">Ubicación de Entrega</Label>
							<Input id="deliveryLocation" value={deliveryLocation} onChange={(e) => setDeliveryLocation(e.target.value)} />
						</div>
						<div>
							<Label htmlFor="requirementType">Tipo de Requerimiento</Label>
							<Select onValueChange={setRequirementType}>
								<SelectTrigger id="requirementType">
									<SelectValue placeholder="Seleccionar tipo de requerimiento" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="cargo_directo">Cargo Directo</SelectItem>
									<SelectItem value="inventario">Inventario</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div>
							<Label htmlFor="businessUnit">Unidad de Negocio Solicitante</Label>
							<Input id="businessUnit" value={businessUnit} onChange={(e) => setBusinessUnit(e.target.value)} />
						</div>
					</div>
					<div>
						<Label htmlFor="description">Descripción</Label>
						<Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
					</div>
					<div>
						<Label htmlFor="justification">Justificación</Label>
						<Textarea id="justification" value={justification} onChange={(e) => setJustification(e.target.value)} />
					</div>
					<div>
						<Label htmlFor="attachments">Anexos</Label>
						<div className="flex items-center space-x-2">
							<Input id="attachments" type="file" multiple onChange={handleFileChange} className="hidden" />
							<Button type="button" onClick={() => document.getElementById("attachments")?.click()}>
								<Upload className="mr-2 h-4 w-4" /> Subir Archivos
							</Button>
							<span>{attachments.length} archivo(s) seleccionado(s)</span>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className="w-full">
				<CardHeader>
					<CardTitle>Líneas de Artículos</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
							<Input placeholder="Artículo" value={newItem.article} onChange={(e) => setNewItem({ ...newItem, article: e.target.value })} />
							<Input placeholder="Descripción" value={newItem.description} onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} />
							<Input type="number" placeholder="Cantidad" value={newItem.quantity || ""} onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })} />
							<Select onValueChange={(value) => setNewItem({ ...newItem, unit: value })}>
								<SelectTrigger>
									<SelectValue placeholder="Unidad" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="UND">UND</SelectItem>
									<SelectItem value="KG">KG</SelectItem>
									<SelectItem value="LT">LT</SelectItem>
								</SelectContent>
							</Select>
							<Input type="number" placeholder="Precio" value={newItem.price || ""} onChange={(e) => setNewItem({ ...newItem, price: Number(e.target.value) })} />
						</div>
						<Button onClick={addLineItem}>
							<PlusCircle className="mr-2 h-4 w-4" /> Agregar Artículo
						</Button>
					</div>

					<div className="overflow-x-auto">
						<Table className="mt-4">
							<TableHeader>
								<TableRow>
									<TableHead>Artículo</TableHead>
									<TableHead>Descripción</TableHead>
									<TableHead>Cantidad</TableHead>
									<TableHead>Unidad</TableHead>
									<TableHead>Precio</TableHead>
									<TableHead>Subtotal</TableHead>
									<TableHead>Acciones</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{lineItems.map((item) => (
									<TableRow key={item.id}>
										<TableCell>{item.article}</TableCell>
										<TableCell>{item.description}</TableCell>
										<TableCell>{item.quantity}</TableCell>
										<TableCell>{item.unit}</TableCell>
										<TableCell>{item.price.toFixed(2)}</TableCell>
										<TableCell>{(item.quantity * item.price).toFixed(2)}</TableCell>
										<TableCell>
											<Button variant="ghost" size="sm" onClick={() => removeLineItem(item.id)}>
												<Trash2 className="h-4 w-4" />
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>

			<Card className="w-full">
				<CardHeader>
					<CardTitle>Resumen de la Orden</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-xl font-semibold">Total: S/ {calculateTotal().toFixed(2)}</p>
				</CardContent>
			</Card>

			<div className="flex justify-end space-x-4">
				<Button variant="outline">Cancelar</Button>
				<Button>Guardar Orden</Button>
			</div>
		</div>
	);
}
