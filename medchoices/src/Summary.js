import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Summarypage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userResponse, questions, number } = location.state || {};
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [doctorInfo, setDoctorInfo] = useState("");
    const [doctorList, setDoctorList] = useState([]);
    const [downloaded, setDownloaded] = useState(false);

    useEffect(() => {
        // Function to load doctor list based on the survey type
        const loadDoctorList = () => {
            if (
                number === "depression" ||
                number === "bipolar" ||
                number === "anxiety"
            ) {
                // Load the mental health doctor list
                fetch("/doctorlist/mental_health_doctors.txt")
                    .then((response) => response.text())
                    .then((text) => {
                        const doctors = text
                            .split("\n")
                            .map((line) => line.trim());
                        setDoctorList(doctors);
                    });
            } else {
                // Load the physical health doctor list
                fetch("/doctorlist/physical_health_doctors.txt")
                    .then((response) => response.text())
                    .then((text) => {
                        const doctors = text
                            .split("\n")
                            .map((line) => line.trim());
                        setDoctorList(doctors);
                    });
            }
        };

        // Fetch the doctor list
        loadDoctorList();
    }, [number]);

    const handleDoctorSelection = (selectedDoctorName) => {
        // Fetch the content of the selected doctor's file
        fetch(`/doctorlist/${selectedDoctorName}.txt`)
            .then((response) => response.text())
            .then((text) => {
                // Set the doctor information in the state
                setDoctorInfo(text);
            })
            .catch((error) => {
                // Handle errors, e.g., the selected doctor file not found
                console.error("Error fetching doctor information:", error);
            });
    };

    const handleDownloadSummary = () => {
        // Create the text content for the summary
        const summaryText = `Summary for Survey ${number}\n\nUser Information:\nNUID: ${
            userResponse.nuid
          }\nFull Name: ${userResponse.fullName}\nAge: ${
            userResponse.age
        }\nEmail: ${userResponse.email}\nPhone Number: ${
            userResponse.phone
        }\n\nEvaluation:\nAverage Grade: ${averageGrade.toFixed(
            2
        )} (${healthConditionMessage})\n\nQuestions and Answers:\n${questions
            .map(
                (question, index) =>
                    `Q${index + 1}: ${question}\nAnswer: ${
                        userResponse.surveyResponses[index]
                    }`
            )
            .join(
                "\n\n"
            )}\n\nSelected Doctor:\n${selectedDoctor}\n${doctorInfo}`;

        // Create a Blob with the summary text
        const blob = new Blob([summaryText], { type: "text/plain" });

        // Create a URL for the Blob
        const url = window.URL.createObjectURL(blob);

        // Create a link element to trigger the download
        const a = document.createElement("a");
        a.href = url;
        a.download = "survey_summary.txt";

        // Trigger a click event to initiate the download
        a.click();

        // Set the downloaded state to true and show the confirmation message
        setDownloaded(true);
    };

    if (!userResponse || !questions || !number) {
        return (
            <div>
                <h1>Error: Missing Data</h1>
                <p>Sorry, there was an issue loading the summary data.</p>
            </div>
        );
    }

    // Calculate the average grade for numerical responses
    const numericalResponses = userResponse.surveyResponses.filter(
        (response) => typeof response === "number"
    );

    const sum = numericalResponses.reduce((acc, value) => acc + value, 0);
    const averageGrade = sum / numericalResponses.length;

    const getHealthConditionMessage = (averageGrade) => {
        if (averageGrade < 3) {
            return "Healthy Condition";
        } else if (averageGrade >= 3 && averageGrade < 5) {
            return "Mild Health Problem";
        } else if (averageGrade >= 5 && averageGrade < 7) {
            return "Moderate Health Problem";
        } else {
            return "Severe Health Problem";
        }
    };
    const healthConditionMessage = getHealthConditionMessage(averageGrade);

    const questionAnswerStyle = {
        fontSize: "17px",
        paddingLeft: "20px",
    };
    const sectionStyle = {
        color: "white",
        padding: "20px",
    };

    return (
        <div className="survey-container">
            <section style={sectionStyle}>
                <h1>Summary Page for survey {number}</h1>
                <details>
                    <summary>User Information</summary>
                    <p>Age: {userResponse.age}</p>
                    <p>Email: {userResponse.email}</p>
                    <p>Phone Number: {userResponse.phone}</p>
                </details>

                <details>
                    <summary>Evaluation</summary>
                    <p>
                        Average Grade: {averageGrade.toFixed(2)} (
                        {healthConditionMessage})
                    </p>
                </details>

                <details>
                    <summary>Questions and Answers</summary>
                    <div style={questionAnswerStyle}>
                        {questions.map((question, index) => (
                            <details key={index}>
                                <summary style={questionAnswerStyle}>
                                    {question}
                                </summary>
                                <p style={questionAnswerStyle}>
                                    Answer:{" "}
                                    {userResponse.surveyResponses[index]}
                                </p>
                            </details>
                        ))}
                    </div>
                </details>

                <details>
                    <summary>Suggestions</summary>
                    <select
                        value={selectedDoctor}
                        onChange={(e) => {
                            setSelectedDoctor(e.target.value);
                            handleDoctorSelection(e.target.value);
                        }}
                    >
                        <option value="">Select a doctor</option>
                        {doctorList.map((doctorInfo, index) => {
                            const [name, specialist] = doctorInfo.split(",");
                            return (
                                <option key={index} value={name}>
                                    {name} - {specialist}
                                </option>
                            );
                        })}
                    </select>
                </details>

                {selectedDoctor && (
                    <button
                        onClick={handleDownloadSummary}
                        className="download-button"
                    >
                        Download Summary
                    </button>
                )}

                {downloaded && (
                    <div>
                        <p>
                            The record has been downloaded. Thank you for your
                            time.
                        </p>
                        <button
                            onClick={() => navigate("/")}
                            className="submit-button"
                        >
                            Confirm
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Summarypage;
