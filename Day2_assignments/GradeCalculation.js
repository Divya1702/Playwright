function gradeTest(grade) {
    switch (true) {
        case (grade>=80 && grade<=100):
        {
            console.log("A");
            break;
        }
        case (grade>=65 && grade<80):
            {
                console.log("B");
                break;
            }
        case (grade>=35 && grade<65):
            {
                console.log("C");
                break;
            }
        case (grade<35):
                {
                console.log("FAILED");
                break;
                }
    }
}
gradeTest(25);
gradeTest(65);
gradeTest(95);