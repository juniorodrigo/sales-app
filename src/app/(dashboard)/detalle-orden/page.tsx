"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const predefinedStates = ["Aprobado", "Cancelado", "En proceso de compra", "Pendiente de aprobación", "Entregado", "Rechazado"];

interface StateHistoryItem {
	state: string;
	description: string;
	date: string;
}

export default function SolicitudDetailPage() {
	const [isLineDetailsOpen, setIsLineDetailsOpen] = useState(true);
	const [isStatesOpen, setIsStatesOpen] = useState(true);
	const [currentState, setCurrentState] = useState("Aprobada");
	const [customState, setCustomState] = useState("");
	const [stateDescription, setStateDescription] = useState("");
	const [stateHistory, setStateHistory] = useState<StateHistoryItem[]>([
		{ state: "Creada", description: "Solicitud creada en el sistema", date: "01/10/24 09:00" },
		{ state: "Pendiente de aprobación", description: "Enviada para aprobación del supervisor", date: "01/10/24 14:30" },
		{ state: "Aprobada", description: "Aprobada por el supervisor de área", date: "02/10/24 10:15" },
	]);

	const toggleLineDetails = () => setIsLineDetailsOpen(!isLineDetailsOpen);
	const toggleStates = () => setIsStatesOpen(!isStatesOpen);

	const handleStateChange = (newState: string) => {
		if (newState === "custom") return;
		setCurrentState(newState);
	};

	const handleStateSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newState = customState.trim() || currentState;
		if (newState) {
			updateState(newState, stateDescription);
			setCustomState("");
			setStateDescription("");
		}
	};

	const updateState = (newState: string, description: string) => {
		setCurrentState(newState);
		setStateHistory((prev) => [...prev, { state: newState, description, date: new Date().toLocaleString() }]);
	};

	return (
		<div className="flex flex-col h-full overflow-auto bg-gray-100 p-4">
			<Card className="w-full mb-4">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-2xl font-bold">Solicitud: 522934</CardTitle>
					<Button variant="outline">Lista</Button>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
						<div>
							<p className="text-sm font-medium text-gray-500">Unidad de negocio solicitante</p>
							<p>SUMMA_BU</p>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-500">Fecha de creación</p>
							<p>02/10/24</p>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-500">Importe de solicitud</p>
							<p>3,885.00 PEN</p>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-500">Introducida por</p>
							<p className="flex items-center">
								<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
								GERMAN MEJIA DOMINGUEZ
							</p>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-500">Estado</p>
							<p>{currentState}</p>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-500">Importe de aprobación</p>
							<p>3,885.00 PEN</p>
						</div>
						<div className="col-span-full">
							<p className="text-sm font-medium text-gray-500">Descripción</p>
							<p>Lapicero de metal grabado con "Summa Gold Corporation" y "GPTW". Debe incluir estuche.</p>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-500">Justificación</p>
							<p>-</p>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-500">Anexos</p>
							<p>Ninguno</p>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-500">Tipo de requerimiento</p>
							<p>CARGO DIRECTO</p>
						</div>
					</div>

					<Separator className="my-6" />

					<h2 className="text-xl font-semibold mb-4">Líneas de solicitud</h2>
					<div className="flex space-x-2 mb-4 overflow-x-auto">
						<Button variant="outline">Ver</Button>
						<Button variant="outline">Formato</Button>
						<Button variant="outline">Congelar</Button>
						<Button variant="outline">Separar</Button>
						<Button variant="outline">Ajustar</Button>
					</div>

					<div className="overflow-x-auto">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Línea</TableHead>
									<TableHead>Artículo</TableHead>
									<TableHead>Descripción</TableHead>
									<TableHead>Cantidad</TableHead>
									<TableHead>Unidad de medida</TableHead>
									<TableHead>Importe (PEN)</TableHead>
									<TableHead>Precio</TableHead>
									<TableHead>Nombre de categoría</TableHead>
									<TableHead>Estado</TableHead>
									<TableHead>Orden</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell>1</TableCell>
									<TableCell>-</TableCell>
									<TableCell>Lapicero de metal grabado con "Summa Gold Corporation" y "GPTW". Debe incluir estuche.</TableCell>
									<TableCell>370</TableCell>
									<TableCell>UND</TableCell>
									<TableCell>3,885.00</TableCell>
									<TableCell>10.50 PEN</TableCell>
									<TableCell>MISCELANEOS - MISCELAN...</TableCell>
									<TableCell>{currentState}</TableCell>
									<TableCell>-</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>

					<p className="text-sm text-gray-500 mt-2">Columnas Ocultas: 13</p>

					<Separator className="my-6" />

					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold">Línea 1 : Detalles</h2>
						<Button variant="ghost" onClick={toggleLineDetails}>
							{isLineDetailsOpen ? <ChevronUp /> : <ChevronDown />}
						</Button>
					</div>

					{isLineDetailsOpen && (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							<div>
								<p className="text-sm font-medium text-gray-500">Solicitante</p>
								<p className="flex items-center">
									<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
									GERMAN MEJIA DOMINGUEZ
								</p>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-500">Tipo de destino</p>
								<p>Gasto</p>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-500">Fecha de entrega solicitada</p>
								<p>09/10/24</p>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-500">Subinventario</p>
								<p>-</p>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-500">Tipo de ubicación de entrega</p>
								<p>Interna</p>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-500">Comprador</p>
								<p className="flex items-center">
									<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
									LENNIN ORTIZ
								</p>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-500">Ubicación de entrega</p>
								<p>SG_OFICINA_LIMA</p>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-500">Proveedor sugerido</p>
								<p>-</p>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-500">Artículo de proveedor</p>
								<p>-</p>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-500">CR</p>
								<p>7003</p>
							</div>
							<div className="col-span-full">
								<p className="text-sm font-medium text-gray-500">IMPORTANTE:</p>
								<p>LOS 3 CAMPOS A CONTINUACIÓN SE USAN SOLO PARA VALES.</p>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-500">Tipo Salida</p>
								<p>-</p>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-500">DNI (EPP)</p>
								<p>-</p>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-500">RUC (VENTA)</p>
								<p>-</p>
							</div>
						</div>
					)}

					<Separator className="my-6" />

					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold">Estados</h2>
						<Button variant="ghost" onClick={toggleStates}>
							{isStatesOpen ? <ChevronUp /> : <ChevronDown />}
						</Button>
					</div>

					{isStatesOpen && (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-lg font-medium mb-2">Estado actual</h3>
								<p className="text-2xl font-bold text-blue-600 mb-4">{currentState}</p>
								<h3 className="text-lg font-medium mb-2">Actualizar estado</h3>
								<form onSubmit={handleStateSubmit} className="space-y-4">
									<div>
										<Label htmlFor="state-select">Seleccionar estado</Label>
										<Select onValueChange={handleStateChange}>
											<SelectTrigger id="state-select" className="w-full">
												<SelectValue placeholder="Seleccionar nuevo estado" />
											</SelectTrigger>
											<SelectContent>
												{predefinedStates.map((state) => (
													<SelectItem key={state} value={state}>
														{state}
													</SelectItem>
												))}
												<SelectItem value="custom">Estado personalizado</SelectItem>
											</SelectContent>
										</Select>
									</div>
									{currentState === "custom" && (
										<div>
											<Label htmlFor="custom-state">Estado personalizado</Label>
											<Input id="custom-state" value={customState} onChange={(e) => setCustomState(e.target.value)} placeholder="Ingrese estado personalizado" />
										</div>
									)}
									<div>
										<Label htmlFor="state-description">Descripción del estado</Label>
										<Textarea id="state-description" value={stateDescription} onChange={(e) => setStateDescription(e.target.value)} placeholder="Ingrese una descripción para el nuevo estado" rows={3} />
									</div>
									<Button type="submit">Actualizar Estado</Button>
								</form>
							</div>
							<div>
								<h3 className="text-lg font-medium mb-2">Historial de estados</h3>
								<ul className="space-y-4">
									{stateHistory.map((item, index) => (
										<li key={index} className="border-b pb-2">
											<div className="flex justify-between items-center">
												<span className="font-semibold">{item.state}</span>
												<span className="text-sm text-gray-500">{item.date}</span>
											</div>
											<p className="text-sm text-gray-600 mt-1">{item.description}</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
