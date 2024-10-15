import React, { useState, useEffect, ChangeEvent } from "react";
import {
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Typography,
    Box,
    Alert
} from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

const SearchLevel: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [levelCode, setLevelCode] = useState<string>("");
    const [exactMatch, setExactMatch] = useState<boolean>(false);
    const [results, setResults] = useState<string[]>([]);
    const [fileData, setFileData] = useState<string>("");
    const [errors, setErrors] = useState<{ levelCode: string }>({ levelCode: "" });

    // Charger le fichier .fab pour les niveaux d'études lors du montage du composant
    useEffect(() => {
        fetch("/fichier_apprentissage_brut_niveau.fab")
            .then(response => response.text())
            .then(data => setFileData(data))
            .catch(error => console.error("Erreur lors du chargement du fichier:", error));
    }, []);

    // Validation des champs Code Niveau
    const validateFields = (): boolean => {
        let valid = true;
        const newErrors = { levelCode: "" };

        // Validation Code Niveau: 5 chiffres maximum
        if (levelCode && !/^\d{1,5}$/.test(levelCode)) {
            newErrors.levelCode = "Le code niveau doit comporter jusqu’à 5 chiffres.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    // Fonction pour rechercher des résultats en fonction des critères
    const handleSearch = (): void => {
        if (!fileData) {
            console.error("Fichier non chargé");
            return;
        }

        if (!validateFields()) {
            return;
        }

        const lines = fileData.split("\n");
        const filteredResults = lines.filter(line => {
            let match = true;

            // Filtrer par libellé (exact ou partiel)
            if (searchTerm) {
                const searchText = exactMatch ? `\\b${searchTerm}\\b` : searchTerm;
                const regex = new RegExp(searchText, "i");
                match = match && regex.test(line);
            }

            // Filtrer par code niveau
            if (levelCode) {
                match = match && line.includes(levelCode);
            }

            return match;
        });

        setResults(filteredResults);
    };

    // Réinitialiser les critères de recherche
    const handleReset = (): void => {
        setSearchTerm("");
        setLevelCode("");
        setExactMatch(false);
        setResults([]); // Réinitialise les résultats
        setErrors({ levelCode: "" });
    };

    // Restreindre l'entrée dans le champ Code Niveau (chiffres uniquement)
    const handleLevelCodeChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value.replace(/\D/g, ""); // Retirer les lettres
        setLevelCode(value);
    };

    return (
        <Box p={3} sx={{ backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: 2 }}>
            <Typography variant="h4" gutterBottom>
                Recherche par Niveau d'Études
            </Typography>

            <Grid container spacing={2}>
                {/* Libellé */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Libellé du niveau d'études"
                        variant="outlined"
                        value={searchTerm}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                        placeholder="Tapez le nom du niveau d'études"
                    />
                </Grid>

                {/* Case à cocher pour les mots entiers */}
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox checked={exactMatch} onChange={() => setExactMatch(!exactMatch)} />
                        }
                        label="Mots entiers uniquement"
                    />
                </Grid>

                {/* Code niveau d'études */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Code niveau d'études (5 chiffres max)"
                        variant="outlined"
                        value={levelCode}
                        onChange={handleLevelCodeChange}
                        inputProps={{ maxLength: 5 }}
                        error={!!errors.levelCode}
                        helperText={errors.levelCode}
                    />
                </Grid>

                {/* Boutons alignés sur une même ligne */}
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSearch}
                            sx={{ width: "48%" }}
                        >
                            Rechercher
                        </Button>

                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleReset}
                            startIcon={<ReplayIcon />}
                            sx={{ width: "48%" }}
                        >
                            Effacer les critères
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            {/* Résultats de recherche */}
            <Box mt={4}>
                {results.length > 0 ? (
                    <ul>
                        {results.map((result, index) => (
                            <li key={index}>{result}</li>
                        ))}
                    </ul>
                ) : (
                    <Alert severity="info">Aucun résultat trouvé</Alert>
                )}
            </Box>
        </Box>
    );
};

export default SearchLevel;
