"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const OrdersRequiringAttention = () => (
	<Card>
		<CardHeader>
			<CardTitle>Órdenes que requieren atención</CardTitle>
		</CardHeader>
		<CardContent className="flex justify-around">
			<div className="text-center">
				<div className="text-4xl font-bold">0</div>
				<div>Fallo de envío</div>
			</div>
			<div className="text-center">
				<div className="text-4xl font-bold">0</div>
				<div>Con retenciones d...</div>
			</div>
			<div className="text-center">
				<div className="text-4xl font-bold">0</div>
				<div>Rechazadas</div>
			</div>
		</CardContent>
	</Card>
);

const OrdersInProgress = () => {
	const data = [
		{ name: "Aprobación", value: 3 },
		{ name: "Acuse de re...", value: 1 },
	];
	const COLORS = ["#0088FE", "#FFBB28"];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Órdenes en curso</CardTitle>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={200}>
					<PieChart>
						<Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold">
							4
						</text>
					</PieChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

const RecentActivity = () => (
	<Card>
		<CardHeader>
			<CardTitle>Actividad reciente</CardTitle>
		</CardHeader>
		<CardContent>
			<ul className="space-y-2">
				<li>
					Orden vencida recibida | 02/10/24
					<br />
					Order 103803 - CORPORACION LA SIRENA SAC
				</li>
				<li>
					Orden vencida recibida | 02/10/24
					<br />
					Order 103803 - CORPORACION LA SIRENA SAC
				</li>
				<li>
					Orden vencida recibida | 02/10/24
					<br />
					Order 104604 - FERRECORP PROYECTOS Y SUMI...
				</li>
				<li>
					Orden vencida recibida | 02/10/24
					<br />
					Order 104583 - OFIGROUP SOCIEDAD ANONIMA C...
				</li>
			</ul>
		</CardContent>
	</Card>
);

const RequestLines = () => (
	<Card>
		<CardHeader>
			<CardTitle>Líneas de solicitud</CardTitle>
		</CardHeader>
		<CardContent>
			<div className="text-4xl font-bold">80</div>
			<div>Acción necesaria</div>
		</CardContent>
	</Card>
);

const Incomplete = () => (
	<Card>
		<CardHeader>
			<CardTitle>Incompleta</CardTitle>
		</CardHeader>
		<CardContent>
			<div className="text-4xl font-bold">93</div>
			<div>Órdenes</div>
			<div className="mt-2">
				<span className="text-2xl font-bold">3</span> Órdenes de cam...
			</div>
		</CardContent>
	</Card>
);

const OpenPrograms = () => {
	const data = [
		{ name: "Abierto", value: 156 },
		{ name: "Cerrado para recepción", value: 55 },
	];
	const COLORS = ["#0088FE", "#00C49F"];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Programas abiertos</CardTitle>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={200}>
					<PieChart>
						<Pie data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

const RequestLinesByAge = () => {
	const data = [
		{ name: "De 0 a 3 días", value: 4 },
		{ name: "De 4 a 7 días", value: 41 },
		{ name: "De 8 a 14 días", value: 17 },
		{ name: "Más de 14 d...", value: 16 },
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Líneas de solicitudes por antigüedad</CardTitle>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={200}>
					<BarChart data={data}>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="value" fill="#8884d8" />
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

const PendingAcknowledgments = () => (
	<Card>
		<CardHeader>
			<CardTitle>Órdenes pendientes de acuse de recibo</CardTitle>
		</CardHeader>
		<CardContent className="flex justify-around">
			<div className="text-center">
				<div className="text-4xl font-bold">0</div>
				<div>Vencida</div>
			</div>
			<div className="text-center">
				<div className="text-4xl font-bold">0</div>
				<div>Pendiente</div>
			</div>
		</CardContent>
	</Card>
);

export default function DashboardPage() {
	return (
		<div className="p-4 space-y-4">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<OrdersRequiringAttention />
				<OrdersInProgress />
				<RecentActivity />
				<RequestLines />
				<Incomplete />
				<OpenPrograms />
				<RequestLinesByAge />
				<PendingAcknowledgments />
			</div>
		</div>
	);
}
