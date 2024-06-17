import { useState } from "react";
import { FormControl } from "@mui/material";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Select } from "@codegouvfr/react-dsfr/Select";
import { useTranslation, declareComponentKeys } from "i18n";
import { useRouter } from "@tanstack/react-router";

export type Props = {
    className?: string;
};

const cleanValue = (value: string) => {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "");
};

export function ChoosePlatform({ className }: Props) {
    const { t } = useTranslation("ChoosePlatform");
    const router = useRouter();
    const [value, setValue] = useState("");
    const [step, setStep] = useState(1);
    const [selectedType, setSelectedType] = useState("");

    const handleFirstStepNavigation = (type: string) => {
        if (value) {
            setSelectedType(type);
            setStep(2);
        }
    };

    const handleSecondStepNavigation = (role: string) => {
        if (value && selectedType) {
            const cleanedValue = cleanValue(value);
            router.navigate({ to: `/${cleanedValue}/${selectedType}/${role}/dashboard` });
        }
    };

    return (
        <div className={className}>
            {step === 1 ? (
                <>
                    <h1>{t("choose platform")}</h1>
                    <FormControl>
                        <Select
                            label={t("select survey")}
                            nativeSelectProps={{
                                onChange: event => setValue(event.target.value),
                                value
                            }}
                        >
                            <option value="">Sélectionnez une option</option>
                            <option value="Melopee">Melopee</option>
                            <option value="Enquête 1">Enquête 1</option>
                            <option value="Enquête 2">Enquête 2</option>
                            <option value="Enquête 3">Enquête 3</option>
                        </Select>
                    </FormControl>
                    <div style={{ marginTop: "40px" }}>
                        <Button
                            iconId="ri-briefcase-line"
                            onClick={() => handleFirstStepNavigation("emploi")}
                            disabled={!value}
                        >
                            {t("job")}
                        </Button>
                        <Button
                            iconId="ri-book-line"
                            onClick={() => handleFirstStepNavigation("formation")}
                            disabled={!value}
                            style={{ marginLeft: "20px" }}
                        >
                            {t("training")}
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <h3>{`${t("choice of access mode")} ${t("choose platform")} ${selectedType} ${t("select survey")}  ${value}`}</h3>
                    <div style={{ marginTop: "40px" }}>
                        <Button
                            iconId="ri-code-line"
                            onClick={() => handleSecondStepNavigation("codeur")}
                        >
                            {t("coder")}
                        </Button>
                        <Button
                            iconId="ri-user-line"
                            onClick={() => handleSecondStepNavigation("expert")}
                            style={{ marginLeft: "20px" }}
                        >
                            {t("expert")}
                        </Button>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <Button iconId="ri-arrow-left-line" onClick={() => setStep(1)}>
                            {t("back")}
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}

const { i18n } = declareComponentKeys<
    | "choose platform"
    | "select survey"
    | "job"
    | "training"
    | "choice of access mode"
    | "coder"
    | "expert"
    | "back"
>()("ChoosePlatform");

export type I18n = typeof i18n;
