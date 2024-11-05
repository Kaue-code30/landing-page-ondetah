import { AxiosResponse } from "axios";
import { ClientDataPlano } from "@/app/pages/home/interfaces/clientData";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'https://api.rd.services/platform/conversions?api_key=uMNBxrWUgccjMwMfkzYxIcPFAgEJexMYZTqf';

const fetchData = async (clientData: ClientDataPlano): Promise<AxiosResponse<ClientDataPlano>> => {
    console.log(clientData);

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
                personal_phone: clientData.floating_email,
                company_name: clientData.floating_company,
                cf_cnpj: clientData.floating_cnpj,
                cf_comunicacao: clientData.floating_funcoesDeComunicacao,
                cf_link: clientData.floating_linkEnviados,
                cf_tecnologia: clientData.floating_tecnologiasQuePossui,
                cf_media_de_pedidos: clientData.floating_mediaPedidos,
                cf_plano_escolhido: clientData.floating_plano,
                cf_transportadoras: clientData.floating_QuantasTransportadoras,
                cf_referencia: clientData.page_name,
                cf_termos: clientData.floating_terms
            }
        }
    };

    try {
        const response = await axios.request<ClientDataPlano>(options);
        return response;
    } catch (error: any) {
        console.error('Erro na requisição:', error.response?.data || error.message);
        throw error;
    }
};

export function useClientData() {
    const mutation = useMutation<AxiosResponse<ClientDataPlano>, Error, ClientDataPlano>({
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
