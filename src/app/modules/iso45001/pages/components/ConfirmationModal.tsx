import React from 'react'

type ConfirmationModalProps = {
	isOpen: boolean
	onClose: () => void
	onConfirm: () => void
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
	if (!isOpen) return null

	return (
		<div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1050 }} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded shadow-lg w-full" style={{ marginLeft: '33%', marginRight: '33%', marginTop: '15%' }}>
				<div className="bg-white p-6 rounded max-w-md w-full">
					<h2 className="text-lg font-bold">Confirmación de Eliminación</h2>
					<p>¿Estás seguro de que deseas eliminar este extintor?</p>
					<div className="mt-4 flex justify-between w-full">
						<button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
						<button
							style={{ marginLeft: '40%' }} className="btn btn-danger"
							onClick={onConfirm}>Eliminar</button>
					</div>

				</div>
			</div>
		</div>
	)
}

export default ConfirmationModal
