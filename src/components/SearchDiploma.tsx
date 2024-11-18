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

const SearchDiploma: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [diplomaCode, setDiplomaCode] = useState<string>("");
    const [nsfCode, setNsfCode] = useState<string>("");
    const [exactMatch, setExactMatch] = useState<boolean>(false);
    const [results, setResults] = useState<string[]>([]);
    const [fileData, setFileData] = useState<string>("");
    const [errors, setErrors] = useState<{ diplomaCode: string; nsfCode: string }>({
        diplomaCode: "",
        nsfCode: ""
    });

    useEffect(() => {
        fetch("/fichier_apprentissage_brut.fab")
            .then(response => response.text())
            .then(data => setFileData(data))
            .catch(error => console.error("Erreur lors du chargement du fichier:", error));
    }, []);

    const validateFields = (): boolean => {
        let valid = true;
        const newErrors = { diplomaCode: "", nsfCode: "" };

        if (diplomaCode && !/^\d{1,4}$/.test(diplomaCode)) {
            newErrors.diplomaCode = "Le code diplôme doit comporter jusqu’à 4 chiffres.";
            valid = false;
        }

        if (nsfCode && !/^\d{1,3}[a-zA-Z]?$/.test(nsfCode)) {
            newErrors.nsfCode = "Le code NSF doit comporter jusqu’à 3 chiffres suivis d'une lettre.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

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

            if (searchTerm) {
                const searchText = exactMatch ? `\\b${searchTerm}\\b` : searchTerm;
                const regex = new RegExp(searchText, "i");
                match = match && regex.test(line);
            }

            if (diplomaCode) {
                match = match && line.includes(diplomaCode);
            }

            if (nsfCode) {
                match = match && line.includes(nsfCode);
            }

            return match;
        });

        setResults(filteredResults);
    };

    const handleReset = (): void => {
        setSearchTerm("");
        setDiplomaCode("");
        setNsfCode("");
        setExactMatch(false);
        setResults([]);
        setErrors({ diplomaCode: "", nsfCode: "" });
    };

    const handleDiplomaCodeChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value.replace(/\D/g, "");
        setDiplomaCode(value);
    };

    const handleNsfCodeChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value.replace(/[^0-9a-zA-Z]/g, "");
        setNsfCode(value);
    };

    return (
        <Box p={3} sx={{ backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: 2 }}>
            <Typography variant="h4" gutterBottom>
                Recherche de Diplômes
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Libellé du diplôme"
                        variant="outlined"
                        value={searchTerm}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                        placeholder="Tapez le nom du diplôme"
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox checked={exactMatch} onChange={() => setExactMatch(!exactMatch)} />
                        }
                        label="Mots entiers uniquement"
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Code diplôme (4 chiffres max)"
                        variant="outlined"
                        value={diplomaCode}
                        onChange={handleDiplomaCodeChange}
                        inputProps={{ maxLength: 4 }}
                        error={!!errors.diplomaCode}
                        helperText={errors.diplomaCode}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Code NSF (3 chiffres et une lettre max)"
                        variant="outlined"
                        value={nsfCode}
                        onChange={handleNsfCodeChange}
                        inputProps={{ maxLength: 4 }}
                        error={!!errors.nsfCode}
                        helperText={errors.nsfCode}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="primary" fullWidth onClick={handleSearch}>
                        Rechercher
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Button
                        variant="contained"
                        color="error"
                        fullWidth
                        onClick={handleReset}
                        startIcon={<ReplayIcon />}
                        sx={{ fontWeight: "bold" }}
                    >
                        Effacer les critères
                    </Button>
                </Grid>
            </Grid>
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

export default SearchDiploma;
