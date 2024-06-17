export const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh"
    },
    calloutContainer: {
        width: 800
    },
    ul: {
        listStyle: "none",
        padding: 0
    },
    li: {
        display: "flex",
        alignItems: "center",
        marginBottom: "8px"
    },
    icon: {
        marginRight: "8px",
        fontSize: "1.2em"
    },
    detailsContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "800px",
        marginTop: "20px"
    },
    calloutDetails: {
        width: "48%"
    },
    card: {
        backgroundColor: "#ffffff",
        transition: "transform 0.3s ease-in-out",
        margin: "10px",
        padding: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "28px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        width: "320px",
        height: "280px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    bgCircle: {
        height: "128px",
        width: "128px",
        backgroundColor: "#B0CFE1",
        zIndex: 1,
        position: "absolute" as const,
        top: "-75px",
        right: "-75px",
        borderRadius: "50%",
        transition: "transform 0.5s ease"
    },
    cardContent: {
        zIndex: 2,
        position: "relative" as const
    },
    infoRow: {
        marginBottom: "10px"
    },
    infoRowIcon: {
        marginRight: "4px",
        fontSize: "16px"
    },
    infoRowLabel: {
        fontWeight: "bold",
        marginRight: "4px",
        fontSize: "14px"
    },
    infoRowValue: {
        fontSize: "14px"
    }
};
