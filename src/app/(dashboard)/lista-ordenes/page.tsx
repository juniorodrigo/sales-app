"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HelpCircle, Grid, List, Settings, ArrowDownUp, ChevronRight } from "lucide-react";

export default function ProcesarSolicitudesPage() {
	const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

	const toggleRow = (index: number) => {
		const newExpandedRows = new Set(expandedRows);
		if (newExpandedRows.has(index)) {
			newExpandedRows.delete(index);
		} else {
			newExpandedRows.add(index);
		}
		setExpandedRows(newExpandedRows);
	};

	const requestData = [
		{
			id: 522934,
			line: 1,
			article: "",
			description: 'Lapicero de metal grabado con "Summa Gold Corporation" y "GPTW". Debe incluir estuche.',
			quantity: 370,
			unit: "UND",
			price: 10.5,
			amount: 3885.0,
			currency: "PEN",
			requester: "GERMAN MEJIA DOMINGUEZ",
		},
		{
			id: 522914,
			line: 1,
			article: "019988",
			description: "CONO DE TRANSITO COLOR VERDE, 2 CINTAS DE SEGURIDAD, BASE DE CAUCHO, ALTURA: 90CM",
			quantity: 12,
			unit: "UND",
			price: 110.0,
			amount: 1320.0,
			currency: "PEN",
			requester: "JESUS CHIANG BRAVO",
		},
		{
			id: 522906,
			line: 1,
			article: "007495",
			description: "ARCHIVADOR LOMO ANCHO TAMAÑO A-4 CON PALANCA",
			quantity: 20,
			unit: "UND",
			price: 8.0,
			amount: 160.0,
			currency: "PEN",
			requester: "JOHNY VALENCIA TACANGA",
		},
		{
			id: 522820,
			line: 1,
			article: "004346",
			description: "TUBO CONICO DE PLASTICO DE 50ML CON TAPA CORNING",
			quantity: 1000,
			unit: "UND",
			price: 1.67,
			amount: 1670.0,
			currency: "PEN",
			requester: "RAFAEL VALVERDE CALIPUY",
		},
		{
			id: 522780,
			line: 2,
			article: "001305",
			description: "CANCAMO TIPO BARRETA DE 1IN X 1M DE LARGO C/ARGOLLA QUINTA",
			quantity: 25,
			unit: "UND",
			price: 80.0,
			amount: 2000.0,
			currency: "PEN",
			requester: "ERICK ROSAS MERCADO",
		},
		{
			id: 522779,
			line: 1,
			article: "013154",
			description: 'ABRAZADERA METALICA DE 6" PERNO+ TUERCA ZINCADA',
			quantity: 12,
			unit: "UND",
			price: 1.0,
			amount: 12.0,
			currency: "PEN",
			requester: "ERICK ROSAS MERCADO",
		},
		{
			id: 522762,
			line: 1,
			article: "002585",
			description: 'MANGUERA DE PVC 6" LAY FLAT HEAVY DUTY 135 PSI ROLLO X 100MT',
			quantity: 500,
			unit: "M",
			price: 42.0,
			amount: 21000.0,
			currency: "PEN",
			requester: "ERICK ROSAS MERCADO",
		},
		{ id: 522743, line: 1, article: "007094", description: "VASO DESCARTABLE", quantity: 500, unit: "UND", price: 0.3, amount: 150.0, currency: "PEN", requester: "RAFAEL VALVERDE CALIPUY" },
		{
			id: 522742,
			line: 1,
			article: "013881",
			description: "FIOLA VOLUMETRICA DE VIDRIO BOCA ESMERILADA PYREX CON TAPA DE CLASE A X 500 ML",
			quantity: 12,
			unit: "UND",
			price: 112.0,
			amount: 1344.0,
			currency: "PEN",
			requester: "RAFAEL VALVERDE CALIPUY",
		},
		{
			id: 522741,
			line: 1,
			article: "015678",
			description: "LAPTOP DELL LATITUDE 5420, INTEL CORE I7, 16GB RAM, 512GB SSD",
			quantity: 5,
			unit: "UND",
			price: 1500.0,
			amount: 7500.0,
			currency: "PEN",
			requester: "MARIA RODRIGUEZ LOPEZ",
		},
	];

	return (
		<div className="min-h-screen bg-gray-100 p-4 flex flex-col">
			<div className="bg-white rounded-lg shadow-md p-6 space-y-6 flex-grow">
				<div className="flex items-center space-x-4 text-sm">
					<span className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">Visión general</span>
					<ChevronRight className="h-4 w-4 text-gray-400" />
					<span className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">Orden de compra: 104550</span>
					<ChevronRight className="h-4 w-4 text-gray-400" />
					<span className="text-blue-600 font-semibold">Procesar solicitudes</span>
				</div>

				<div className="flex items-center justify-between">
					<h1 className="text-3xl font-bold flex items-center text-gray-800">
						Procesar solicitudes
						<HelpCircle className="ml-2 h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
					</h1>
					<Button variant="outline" className="hover:bg-gray-100 transition-colors">
						Lista
					</Button>
				</div>

				<div className="flex items-center justify-between space-x-4 bg-gray-50 p-4 rounded-lg">
					<div className="flex-1">
						<h2 className="text-lg font-semibold mb-2 text-gray-700">Buscar</h2>
						<div className="flex space-x-2">
							<Button variant="outline" className="hover:bg-gray-200 transition-colors">
								Avanzada
							</Button>
							<Button variant="outline" className="hover:bg-gray-200 transition-colors">
								Gestionar lista de comprobaciones
							</Button>
							<Button variant="outline" className="hover:bg-gray-200 transition-colors">
								Búsqueda Guardada
							</Button>
						</div>
					</div>
					<Select>
						<SelectTrigger className="w-[300px]">
							<SelectValue placeholder="Todas mis líneas de solicitud que requieren acción" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todas mis líneas de solicitud que requieren acción</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div>
					<h3 className="text-sm font-semibold mb-2 text-gray-600">Resultados de búsqueda: Líneas de solicitud</h3>
					<div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
						<Select>
							<SelectTrigger className="w-[100px]">
								<SelectValue placeholder="Acciones" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="action1">Acción 1</SelectItem>
								<SelectItem value="action2">Acción 2</SelectItem>
							</SelectContent>
						</Select>
						<Select>
							<SelectTrigger className="w-[100px]">
								<SelectValue placeholder="Ver" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="view1">Vista 1</SelectItem>
								<SelectItem value="view2">Vista 2</SelectItem>
							</SelectContent>
						</Select>
						<Select>
							<SelectTrigger className="w-[100px]">
								<SelectValue placeholder="Formato" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="format1">Formato 1</SelectItem>
								<SelectItem value="format2">Formato 2</SelectItem>
							</SelectContent>
						</Select>
						<Button variant="outline" size="icon" className="hover:bg-gray-100 transition-colors">
							<Grid className="h-4 w-4" />
						</Button>
						<Button variant="outline" size="icon" className="hover:bg-gray-100 transition-colors">
							<List className="h-4 w-4" />
						</Button>
						<Button variant="outline" className="hover:bg-gray-100 transition-colors">
							Separar
						</Button>
						<Button variant="outline" className="hover:bg-gray-100 transition-colors">
							Ajustar
						</Button>
						<Button variant="outline" className="hover:bg-gray-100 transition-colors">
							Agregar al generador de documentos
						</Button>
						<Button variant="outline" className="hover:bg-gray-100 transition-colors">
							Devolver
						</Button>
						<Button variant="outline" className="hover:bg-gray-100 transition-colors">
							Reasignar
						</Button>
					</div>

					<div className="overflow-x-auto bg-white rounded-lg border">
						<Table>
							<TableHeader>
								<TableRow className="bg-gray-50">
									<TableHead className="w-[100px]">Solicitud</TableHead>
									<TableHead>Línea</TableHead>
									<TableHead>Artículo</TableHead>
									<TableHead>Descripción de línea</TableHead>
									<TableHead>Cantidad</TableHead>
									<TableHead>Unidad de medida</TableHead>
									<TableHead>Precio</TableHead>
									<TableHead>Importe</TableHead>
									<TableHead>Moneda</TableHead>
									<TableHead>Solicitante</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{requestData.map((row, index) => (
									<TableRow key={row.id} className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => toggleRow(index)}>
										<TableCell className="font-medium text-blue-600">{row.id}</TableCell>
										<TableCell>{row.line}</TableCell>
										<TableCell>{row.article}</TableCell>
										<TableCell>{row.description}</TableCell>
										<TableCell className="text-right">{row.quantity.toLocaleString()}</TableCell>
										<TableCell>{row.unit}</TableCell>
										<TableCell className="text-right">{row.price.toFixed(2)}</TableCell>
										<TableCell className="text-right">{row.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
										<TableCell>{row.currency}</TableCell>
										<TableCell>{row.requester}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</div>

				<div className="flex justify-between items-center text-sm text-gray-500 mt-4">
					<span>Columnas Ocultas: 50</span>
					<div className="flex items-center space-x-2">
						<Button variant="ghost" size="sm" className="hover:bg-gray-100 transition-colors">
							<ArrowDownUp className="h-4 w-4 mr-2" /> Ordenar
						</Button>
						<Button variant="ghost" size="sm" className="hover:bg-gray-100 transition-colors">
							<Settings className="h-4 w-4 mr-2" /> Personalizar
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
