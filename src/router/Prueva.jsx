import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrestamosPage, PresupuestoPages, ClientesPage } from '../loan-user-admin/pages'

export const Prueva = () => {
    return (
        <Routes>
            <Route path='/clientes' element={<ClientesPage />} />
            <Route path='/prestamos' element={<PrestamosPage />} />
            <Route path='/presupuesto' element={<PresupuestoPages />} />

        </Routes>
    )
}
