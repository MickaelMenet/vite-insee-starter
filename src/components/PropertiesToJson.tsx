import { useState } from "react";
import properties from "properties-parser";
import { TextDecoder } from "text-encoding";

const PropertiesToJson = () => {
    const [jsonResult, setJsonResult] = useState(null);
    const [error, setError] = useState(null);

    const handleFileUpload = event => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = e => {
            const arrayBuffer = e.target.result;

            const decoder = new TextDecoder("ISO-8859-1");
            const text = decoder.decode(arrayBuffer);

            try {
                const parsedProperties = properties.parse(text);
                setJsonResult(parsedProperties);
                setError(null);
            } catch (err) {
                setError("Erreur lors du parsing du fichier .properties");
                console.error(err);
            }
        };

        reader.onerror = () => {
            setError("Erreur de lecture du fichier");
        };

        reader.readAsArrayBuffer(file);
    };

    const downloadJson = () => {
        const dataStr =
            "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonResult, null, 2));
        const downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "output.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    return (
        <div>
            <h1>Convertisseur de fichier .properties en JSON</h1>
            <input type="file" accept=".properties" onChange={handleFileUpload} />

            {error && <p style={{ color: "red" }}>{error}</p>}

            {jsonResult && (
                <div>
                    <h2>Résultat JSON :</h2>
                    <pre>{JSON.stringify(jsonResult, null, 2)}</pre>
                    <button onClick={downloadJson}>Télécharger en JSON</button>
                </div>
            )}
        </div>
    );
};

export default PropertiesToJson;
