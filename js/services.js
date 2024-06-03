$(document).ready(function () {
    const services = [{
            "id": 0,
            "name": "Document Verification",
            "icon": "fa-file",
            "class": "pms",
            "desc": "From initial property assessments to final closing documents, we ensure that every transaction is meticulously documented and legally sound. Our team of experienced professionals is dedicated to providing comprehensive support throughout the documentation process, including drafting contracts, preparing deeds, and handling all necessary paperwork with precision and efficiency. "
        }, {
            "id": 1,
            "name": "Geo Tagging",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 2,
            "name": "Geo Fencing",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 3,
            "name": "Boundary Marking",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 4,
            "name": "Site Cleaning",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 5,
            "name": "Name Board Fixing",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 6,
            "name": "Personal Site Visit",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 7,
            "name": "Personalized Online Dashboard",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 8,
            "name": "EC - Encumbrance Certificate",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 9,
            "name": "Monthly Property Photos",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 10,
            "name": "Monthly Property Videos",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 11,
            "name": "Live Video Call",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 12,
            "name": "Market Value/ Guidance Value",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 13,
            "name": "Asset Development Advisory",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 14,
            "name": "Data Analytics Report",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 15,
            "name": "Nearby Developments",
            "icon": "fa-file",
            "class": "pms"
        }, {
            "id": 16,
            "name": "EC - Encumbrance Certificate",
            "icon": "fa-file",
            "class": "rod"
        },
        {
            "id": 17,
            "name": "Certified Copies of Sale Deed",
            "icon": "fa-file",
            "class": "rod"
        }, {
            "id": 18,
            "name": "Adangal/ Pahani",
            "icon": "fa-file",
            "class": "rod"
        }, {
            "id": 19,
            "name": "Copies of TSLR - Town Survey Land Register",
            "icon": "fa-file",
            "class": "rod"
        }, {
            "id": 20,
            "name": "Khasra Pahani",
            "icon": "fa-file",
            "class": "rod"
        }, {
            "id": 21,
            "name": "Faisal Patti",
            "icon": "fa-file",
            "class": "rod"
        }, {
            "id": 22,
            "name": "Mutation Copies",
            "icon": "fa-file",
            "class": "rod"
        }, {
            "id": 23,
            "name": "ROR - 1B - A/B",
            "icon": "fa-file",
            "class": "rod"
        }, {
            "id": 24,
            "name": "Extract of D Form Patta",
            "icon": "fa-file",
            "class": "rod"
        }, {
            "id": 25,
            "name": "Extract of House site Patta",
            "icon": "fa-file",
            "class": "rod"
        }, {
            "id": 26,
            "name": "Mutation + E Pattadar Passbook",
            "icon": "fa-file",
            "class": "rod"
        }, {
            "id": 27,
            "name": "SETHWAR / SUPPLEMENTARY SETHWAR/RESETTLEMENT REGISTER/FLR",
            "icon": "fa-file",
            "class": "rod"
        }, {
            "id": 28,
            "name": "Issue of TONCH Map",
            "icon": "fa-file",
            "class": "rod"
        }, {
            "id": 29,
            "name": "Primary Legal Opinion",
            "icon": "fa-file",
            "class": "legal"
        }, {
            "id": 30,
            "name": "Second Legal Opinion",
            "icon": "fa-file",
            "class": "legal"
        }, {
            "id": 31,
            "name": "Priliminary Property Briefing",
            "icon": "fa-file",
            "class": "legal"
        }, {
            "id": 32,
            "name": "Title Search Report",
            "icon": "fa-file",
            "class": "legal"
        }, {
            "id": 33,
            "name": "Legal Opinion from Bank Empanalled Lawyers",
            "icon": "fa-file",
            "class": "legal"
        }, {
            "id": 34,
            "name": "Precast Wall",
            "icon": "fa-file",
            "class": "fencing"
        }, {
            "id": 35,
            "name": "Chain Link Fencing",
            "icon": "fa-file",
            "class": "fencing"
        }, {
            "id": 36,
            "name": "Barbed Wire Fencing",
            "icon": "fa-file",
            "class": "fencing"
        }, {
            "id": 37,
            "name": "Solar Fencing",
            "icon": "fa-file",
            "class": "fencing"
        }, {
            "id": 38,
            "name": "Live Monitoring thru Sattelite Imagery",
            "icon": "fa-file",
            "class": "upcoming"
        }, {
            "id": 39,
            "name": "Predective Data Analytics",
            "icon": "fa-file",
            "class": "upcoming"
        }, {
            "id": 40,
            "name": "Property Insurance",
            "icon": "fa-file",
            "class": "upcoming"
        }
    ]

    services.forEach(s => {
        console.log($('#portfolio-holder'))
        $('#portfolio-holder').append(
            `<div class="col ${s.class}">
                <div class="txt-wrap d-flex row justify-content-center text-center">
                    <span class="icon"><i class="fa ${s.icon}"></i></span>
                    <h4><a href="#" data-bs-toggle="modal" data-bs-target="#serviceDesc">${s.name}</a></h4>
                </div>
            </div>`
        )
    });

});