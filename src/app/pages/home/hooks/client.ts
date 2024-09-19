import { AxiosResponse } from "axios";
import { ClientData } from "@/app/pages/home/interfaces/clientData";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'https://api.rd.services/platform/conversions?api_key=uMNBxrWUgccjMwMfkzYxIcPFAgEJexMYZTqf';

const fetchData = async (clientData: ClientData): Promise<AxiosResponse<ClientData>> => {
    console.log(clientData);  // Debugging log
    const options = {
        method: 'POST',
        url: API_URL,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        data: {
            event_type: 'CONVERSION',
            event_family: 'CDP',
            payload: {
                conversion_identifier: clientData.conversion_identifier,
                name: clientData.floating_first_name,
                email: clientData.floating_email,
                personal_phone: clientData.floating_phone,
                job_title: clientData.floating_cargo,
                company_name: clientData.floating_company,
                cf_numero_de_funcionarios: clientData.floating_numeroFuncionarios,
                cf_atividade_da_empresa: clientData.floating_segmento,
                cf_subject: clientData.floating_querofalarSobre,  // Double-check the naming
                cf_querofalarsobre: clientData.floating_querofalarSobre,  // Double-check the naming
                cf_message: "Novo Contato",
                cf_referencia: clientData.page_name,
                cf_termos: clientData.floating_terms
            }
        }
    };

    try {
        const response = await axios.request<ClientData>(options);
        return response;
    } catch (error: any) {
        console.error('Erro na requisição:', error.response?.data || error.message);
        throw error;
    }
};

export function useClientData() {
    const mutation = useMutation<AxiosResponse<ClientData>, Error, ClientData>({
        mutationFn: fetchData
    });

    return {
        mutate: mutation.mutate,
        contentData: mutation.data?.data,
        isLoading: mutation.isPending,  // Corrected the state name
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,      // Optionally handle errors
        error: mutation.error           // Optional to return the error object for UI feedback
    };
}
