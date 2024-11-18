import React, { useState, ChangeEvent } from "react";
import axios from "axios";

interface ApiResponse {
    libelle_norm: string;
    code: string;
}

interface ApiComponentProps {
    statut?: string;
    pub?: string;
    cpf?: string;
    taille?: string;
}

const ApiComponent: React.FC<ApiComponentProps> = ({
    statut: propStatut,
    pub: propPub,
    cpf: propCpf,
    taille: propTaille
}) => {
    const [libelle, setLibelle] = useState<string>("");
    const [libelleNorm, setLibelleNorm] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [error, setError] = useState<Error | null>(null);
    const [noMatchMessage, setNoMatchMessage] = useState<string>("");

    const [statut, setStatut] = useState<string>(propStatut || "");
    const [pub, setPub] = useState<string>(propPub || "");
    const [cpf, setCpf] = useState<string>(propCpf || "");
    const [taille, setTaille] = useState<string>(propTaille || "");

    const statutOptions = [
        { value: "", label: "Sélectionnez le statut" },
        { value: "1", label: "1 - salarié(e)" },
        { value: "2", label: "2 - non-salarié(e)" },
        { value: "3", label: "3 - non rémunéré(e)" },
        { value: "*", label: "* - manquant" }
    ];

    const pubOptions = [
        { value: "", label: "Sélectionnez la position public-privé (PUB)" },
        { value: "1", label: "1 - salarié(e) du privé ou technicien(ne)/ouvrier(ère) du public" },
        { value: "2", label: "2 - salarié(e) du public (agent de catégorie A, B ou C)" },
        { value: "*", label: "* - manquante" }
    ];

    const cpfOptions = [
        { value: "", label: "Sélectionnez la classification professionnelle (CPF)" },
        { value: "1", label: "1 - Ingénieur(e), cadre d’entreprise" },
        { value: "2", label: "2 - Technicien(ne)" },
        { value: "3", label: "3 - Agent de maîtrise" },
        { value: "4", label: "4 - Employé(e) de bureau, de commerce, de services" },
        { value: "5", label: "5 - Ouvrier(ère) qualifié(e), technicien(ne) d’atelier" },
        { value: "6", label: "6 - Manœuvre, ouvrier(ère) spécialisé(e)" },
        { value: "7", label: "7 - Agent de catégorie A de la fonction publique" },
        { value: "8", label: "8 - Agent de catégorie B de la fonction publique" },
        { value: "9", label: "9 - Agent de catégorie C de la fonction publique" },
        { value: "*", label: "* - manquante" }
    ];

    const tailleOptions = [
        { value: "", label: "Sélectionnez la taille de l’entreprise" },
        { value: "0", label: "0 - Entre 1 et 10 personnes" },
        { value: "1", label: "1 - Entre 11 à 49 personnes" },
        { value: "2", label: "2 - 50 personnes ou plus" },
        { value: "*", label: "* - manquante" }
    ];

    const callApi = async () => {
        const url = "/api/codage";
        const payload = {
            libelle: libelle,
            environnement: "PCS2020R",
            variables: {
                STATUT: statut,
                PUB: pub,
                CPF: cpf,
                taille: taille
            }
        };

        try {
            const response = await axios.post<ApiResponse>(url, payload);
            const { libelle_norm, code } = response.data;

            if (code === "Vide") {
                setNoMatchMessage("Il n'y a pas de correspondance.");
                setLibelleNorm("");
                setCode("");
            } else {
                setLibelleNorm(libelle_norm);
                setCode(code);
                setNoMatchMessage("");
            }
        } catch (error: any) {
            setError(error);
            console.error("Erreur de requête:", error);
        }
    };

    const styles = {
        container: {
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f9f9f9"
        },
        header: {
            textAlign: "center",
            color: "#333"
        },
        inputGroup: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px"
        },
        inputField: {
            width: "80%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px"
        },
        button: {
            padding: "10px 20px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s"
        },
        resultGroup: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px"
        },
        resultField: {
            width: "80%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            backgroundColor: "#e9ecef"
        },
        message: {
            textAlign: "center",
            marginTop: "20px",
            color: "#d9534f",
            fontWeight: "bold"
        },
        error: {
            textAlign: "center",
            marginTop: "20px",
            color: "#d9534f"
        },
        errorPre: {
            backgroundColor: "#f8d7da",
            padding: "10px",
            borderRadius: "5px",
            overflowX: "auto"
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>API Codage</h2>
            <div style={styles.inputGroup}>
                <input
                    type="text"
                    value={libelle}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setLibelle(e.target.value)}
                    placeholder="Entrez un libellé"
                    style={styles.inputField}
                />

                {propStatut ? (
                    <input
                        type="text"
                        value={statutOptions.find(option => option.value === statut)?.label || statut}
                        readOnly
                        style={styles.inputField}
                    />
                ) : (
                    <select
                        value={statut}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setStatut(e.target.value)}
                        style={styles.inputField}
                    >
                        {statutOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )}

                {propPub ? (
                    <input
                        type="text"
                        value={pubOptions.find(option => option.value === pub)?.label || pub}
                        readOnly
                        style={styles.inputField}
                    />
                ) : (
                    <select
                        value={pub}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setPub(e.target.value)}
                        style={styles.inputField}
                    >
                        {pubOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )}

                {propCpf ? (
                    <input
                        type="text"
                        value={cpfOptions.find(option => option.value === cpf)?.label || cpf}
                        readOnly
                        style={styles.inputField}
                    />
                ) : (
                    <select
                        value={cpf}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setCpf(e.target.value)}
                        style={styles.inputField}
                    >
                        {cpfOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )}

                {propTaille ? (
                    <input
                        type="text"
                        value={tailleOptions.find(option => option.value === taille)?.label || taille}
                        readOnly
                        style={styles.inputField}
                    />
                ) : (
                    <select
                        value={taille}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setTaille(e.target.value)}
                        style={styles.inputField}
                    >
                        {tailleOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )}

                <button onClick={callApi} style={styles.button}>
                    Appeler l'API
                </button>
            </div>
            <div style={styles.resultGroup}>
                <input
                    type="text"
                    value={libelleNorm}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setLibelleNorm(e.target.value)}
                    placeholder="Libellé normalisé"
                    disabled
                    style={styles.resultField}
                />
                <input
                    type="text"
                    value={code}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                    placeholder="Code"
                    disabled
                    style={styles.resultField}
                />
            </div>

            {noMatchMessage && (
                <div style={styles.message}>
                    <p>{noMatchMessage}</p>
                </div>
            )}

            {error && (
                <div style={styles.error}>
                    <p>Error: {error.message}</p>
                    <pre style={styles.errorPre}>{JSON.stringify(error, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default ApiComponent;
