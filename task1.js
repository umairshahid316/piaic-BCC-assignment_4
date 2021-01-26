
var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]

document.write("Qualifications: <br/>")
for (q in qual) {
    document.write((Number(q) + 1) + ") " + qual[q] + "<br/>")
}