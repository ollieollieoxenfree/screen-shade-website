// Wizard state
let currentProductType = null;
let currentScreenType = null;
let currentSize = null;

// Gallery data - replace image URLs and descriptions with your real photos
const galleryData = {
    screen: {
        motorized: {
            small: {
                title: "Motorized Screens - Small (2-5 ft)",
                items: [
                    { title: "Window Screen", description: "Custom motorized window screen installation", image: "https://via.placeholder.com/400x300?text=Motorized+Small+1" },
                    { title: "Patio Door", description: "Small motorized patio screen", image: "https://via.placeholder.com/400x300?text=Motorized+Small+2" },
                    { title: "Entryway", description: "Motorized entry screen", image: "https://via.placeholder.com/400x300?text=Motorized+Small+3" }
                ]
            },
            medium: {
                title: "Motorized Screens - Medium (5-10 ft)",
                items: [
                    { title: "Large Patio", description: "Medium motorized patio screen", image: "https://via.placeholder.com/400x300?text=Motorized+Medium+1" },
                    { title: "Deck Opening", description: "5-8 ft motorized screen", image: "https://via.placeholder.com/400x300?text=Motorized+Medium+2" },
                    { title: "Gazebo Screen", description: "Medium motorized gazebo enclosure", image: "https://via.placeholder.com/400x300?text=Motorized+Medium+3" }
                ]
            },
            large: {
                title: "Motorized Screens - Large (10+ ft)",
                items: [
                    { title: "Commercial Opening", description: "Large motorized screen for business", image: "https://via.placeholder.com/400x300?text=Motorized+Large+1" },
                    { title: "Stadium Enclosure", description: "Extra large motorized screen", image: "https://via.placeholder.com/400x300?text=Motorized+Large+2" },
                    { title: "Resort Screen", description: "Custom 15 ft motorized screen", image: "https://via.placeholder.com/400x300?text=Motorized+Large+3" }
                ]
            }
        },
        manual: {
            small: {
                title: "Manual Screens - Small (2-5 ft)",
                items: [
                    { title: "Window Screen", description: "Classic manual window screen", image: "https://via.placeholder.com/400x300?text=Manual+Small+1" },
                    { title: "Apartment Patio", description: "Small manual screen door", image: "https://via.placeholder.com/400x300?text=Manual+Small+2" },
                    { title: "Balcony Screen", description: "Manual slide screen", image: "https://via.placeholder.com/400x300?text=Manual+Small+3" }
                ]
            },
            medium: {
                title: "Manual Screens - Medium (5-10 ft)",
                items: [
                    { title: "Sliding Patio Door", description: "Manual 6 ft patio screen", image: "https://via.placeholder.com/400x300?text=Manual+Medium+1" },
                    { title: "Deck Screen", description: "Manual deck enclosure", image: "https://via.placeholder.com/400x300?text=Manual+Medium+2" },
                    { title: "Lanai Screen", description: "Manual lanai enclosure", image: "https://via.placeholder.com/400x300?text=Manual+Medium+3" }
                ]
            },
            large: {
                title: "Manual Screens - Large (10+ ft)",
                items: [
                    { title: "Pool Enclosure", description: "Large manual pool screen", image: "https://via.placeholder.com/400x300?text=Manual+Large+1" },
                    { title: "Warehouse Screen", description: "Commercial manual screen", image: "https://via.placeholder.com/400x300?text=Manual+Large+2" },
                    { title: "Farm Building", description: "Custom 20 ft manual screen", image: "https://via.placeholder.com/400x300?text=Manual+Large+3" }
                ]
            }
        }
    },
    shade: {
        motorized: {
            small: {
                title: "Motorized Shades - Small (2-5 ft)",
                items: [
                    { title: "Window Shade", description: "Motorized window shade", image: "https://via.placeholder.com/400x300?text=Shade+Motorized+Small+1" },
                    { title: "Patio Shade", description: "Small motorized shade", image: "https://via.placeholder.com/400x300?text=Shade+Motorized+Small+2" },
                    { title: "Deck Shade", description: "Motorized retractable shade", image: "https://via.placeholder.com/400x300?text=Shade+Motorized+Small+3" }
                ]
            },
            medium: {
                title: "Motorized Shades - Medium (5-10 ft)",
                items: [
                    { title: "Large Patio Shade", description: "Medium motorized patio shade", image: "https://via.placeholder.com/400x300?text=Shade+Motorized+Medium+1" },
                    { title: "Pergola Shade", description: "Motorized pergola cover", image: "https://via.placeholder.com/400x300?text=Shade+Motorized+Medium+2" },
                    { title: "Commercial Awning", description: "Medium motorized awning", image: "https://via.placeholder.com/400x300?text=Shade+Motorized+Medium+3" }
                ]
            },
            large: {
                title: "Motorized Shades - Large (10+ ft)",
                items: [
                    { title: "Stadium Awning", description: "Large motorized shade system", image: "https://via.placeholder.com/400x300?text=Shade+Motorized+Large+1" },
                    { title: "Resort Pergola", description: "Extra large motorized shade", image: "https://via.placeholder.com/400x300?text=Shade+Motorized+Large+2" },
                    { title: "Commercial Parking", description: "Custom 25 ft motorized shade", image: "https://via.placeholder.com/400x300?text=Shade+Motorized+Large+3" }
                ]
            }
        },
        manual: {
            small: {
                title: "Manual Shades - Small (2-5 ft)",
                items: [
                    { title: "Window Shade", description: "Classic manual shade", image: "https://via.placeholder.com/400x300?text=Shade+Manual+Small+1" },
                    { title: "Small Awning", description: "Manual awning", image: "https://via.placeholder.com/400x300?text=Shade+Manual+Small+2" },
                    { title: "Balcony Shade", description: "Manual retractable shade", image: "https://via.placeholder.com/400x300?text=Shade+Manual+Small+3" }
                ]
            },
            medium: {
                title: "Manual Shades - Medium (5-10 ft)",
                items: [
                    { title: "Patio Awning", description: "Manual patio shade", image: "https://via.placeholder.com/400x300?text=Shade+Manual+Medium+1" },
                    { title: "Deck Cover", description: "Manual deck shade", image: "https://via.placeholder.com/400x300?text=Shade+Manual+Medium+2" },
                    { title: "Pergola Cover", description: "Manual pergola shade", image: "https://via.placeholder.com/400x300?text=Shade+Manual+Medium+3" }
                ]
            },
            large: {
                title: "Manual Shades - Large (10+ ft)",
                items: [
                    { title: "Pool Area Shade", description: "Large manual shade system", image: "https://via.placeholder.com/400x300?text=Shade+Manual+Large+1" },
                    { title: "Commercial Awning", description: "Large manual commercial shade", image: "https://via.placeholder.com/400x300?text=Shade+Manual+Large+2" },
                    { title: "Farm Structure", description: "Custom 20 ft manual shade", image: "https://via.placeholder.com/400x300?text=Shade+Manual+Large+3" }
                ]
            }
        }
    }
};

function selectProductType(type) {
    currentProductType = type;
    document.getElementById('step1').style.display = 'none';
    
    if (type === 'screen') {
        document.getElementById('step2').style.display = 'block';
    } else {
        // For shades, go to shade type selection
        document.getElementById('step2-shade').style.display = 'block';
    }
}

function selectScreenType(type) {
    currentScreenType = type;
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}

function selectShadeType(type) {
    currentScreenType = type;
    document.getElementById('step2-shade').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}

function selectSize(size) {
    currentSize = size;
    showResults();
}

function showResults() {
    document.getElementById('step3').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    
    let data;
    if (currentProductType === 'screen') {
        data = galleryData.screen[currentScreenType][currentSize];
    } else {
        data = galleryData.shade[currentScreenType][currentSize];
    }
    
    document.getElementById('resultsTitle').textContent = data.title;
    
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    
    data.items.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-item-info">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
    
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function backToStep1() {
    currentProductType = null;
    currentScreenType = null;
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step2-shade').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
}

function backToStep2() {
    currentScreenType = null;
    document.getElementById('step3').style.display = 'none';
    if (currentProductType === 'screen') {
        document.getElementById('step2').style.display = 'block';
    } else {
        document.getElementById('step2-shade').style.display = 'block';
    }
}

function startOver() {
    currentProductType = null;
    currentScreenType = null;
    currentSize = null;
    document.getElementById('results').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
}
