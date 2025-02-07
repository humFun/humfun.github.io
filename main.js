// Initialize Lucide icons
lucide.createIcons();

// State object
const state = {
    activeSection: 'home',
    language: 'en',
    selectedCategory: 'all'
};

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const languageToggle = document.getElementById('language-toggle');
const navButtons = document.querySelectorAll('.nav-button');
const body = document.body;

// Navigation
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const section = button.dataset.section;
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        updateActiveSection(section);
    });
});

// Scroll handling
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
            updateActiveSection(section.id);
        }
    });
});

// Update active section
function updateActiveSection(sectionId) {
    state.activeSection = sectionId;
    navButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.section === sectionId);
    });
}

// Render functions
function renderSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer.innerHTML = content[state.language].skills
        .map(skill => `<span class="tag">${skill}</span>`)
        .join('');
}

const projects = [
    {
        id: 1,
        title: "Login page design ",
        category: "Ui design & banner",
        images: [
                {src : "/src/public/css/images-portfolio/ux-ui/image-1/หน้าแรก.png"},
                {src : "/src/public/css/images-portfolio/ux-ui/image-1/ลงทะเบียนเข้าใช้งาน.png"},
                {src : "/src/public/css/images-portfolio/ux-ui/image-1/ลงทะเบียนเข้าใช้งาน_1.1.png"},
                {src : "/src/public/css/images-portfolio/ux-ui/image-1/ยืนยันรหัส.png"},
                {src : "/src/public/css/images-portfolio/ux-ui/image-1/ตั้งค่ารหัสผ่าน.png"},
                {src : "/src/public/css/images-portfolio/ux-ui/image-1/เข้าสู่ระบบ.png"},
        ],
        visibleImagesCount: 4, // กำหนดให้แสดงผล n(n คือแล้วแต่กำหนด) รูปแรก
        initialVisible: 4      // เก็บค่าเริ่มต้นไว้สำหรับใช้ในการ collapse
        
    },
    {
        id: 2,
        title: "App design cartoon",
        category: "Ui design & banner",
        images:[
            {src : "/src/public/css/images-portfolio/ux-ui/image-2/1.png"},
            {src : "/src/public/css/images-portfolio/ux-ui/image-2/2.png"},
            {src : "/src/public/css/images-portfolio/ux-ui/image-2/หลัก.png"},
            {src : "/src/public/css/images-portfolio/ux-ui/image-2/3.png"}
        ],
        visibleImagesCount: 4, // กำหนดให้แสดงผล n รูปแรก
        initialVisible: 4
              
    },
    {
        id: 3,
        title: "App InfoReal",
        category:"Ui design & banner",
        images:[
            { src : "/src/public/css/images-portfolio/ux-ui/image-3/หน้าแรก.jpg"},
            { src : "/src/public/css/images-portfolio/ux-ui/image-3/ลงทะเบียน.jpg"},
            { src : "/src/public/css/images-portfolio/ux-ui/image-3/Login.jpg"},
            { src : "/src/public/css/images-portfolio/ux-ui/image-3/หน้าหลัก.jpg",width:"230px",},
            { src : "/src/public/css/images-portfolio/ux-ui/image-3/เมนู.jpg"},
            { src : "/src/public/css/images-portfolio/ux-ui/image-3/บันทึกข้อมูล.jpg"},
            { src : "/src/public/css/images-portfolio/ux-ui/image-3/อัปเดตข้อมูล.jpg"},
            { src : "/src/public/css/images-portfolio/ux-ui/image-3/แสดงข้อมูล.jpg"},
            { src : "/src/public/css/images-portfolio/ux-ui/image-3/ค้นหา.jpg"},
            { src : "/src/public/css/images-portfolio/ux-ui/image-3/Logout.jpg"},


        ],
        visibleImagesCount: 4, // กำหนดให้แสดงผล n รูปแรก
        initialVisible: 4       // เก็บค่าเริ่มต้นไว้สำหรับใช้ในการ collapse

    },
    {
        id: 4,
        title: "Design stickers & product banners",
        category: "Ui design & banner",
        images:[
            { src : "/src/public/css/images-portfolio/Design_banner/Testชาวนา.png"},
            { src : "/src/public/css/images-portfolio/Design_banner/ชาวนากับข้าว(ข้าว-5-สี)_CMYK_Original.jpg"},
            { src : "/src/public/css/images-portfolio/Design_banner/ชาวนากับข้าว(ข้าวมะลิแดง)_CMYK_Original.jpg"},
            { src : "/src/public/css/images-portfolio/Design_banner/ชาวนากับข้าว(ข้าวเหนียวแดงแสงแรก)_CMYK_Original.jpg"},
            // "/src/public/css/images-portfolio/Design_banner/Artboard 1.png",

        ],
        visibleImagesCount: 2, // กำหนดให้แสดงผล n รูปแรก
        initialVisible: 2
         
    },
    {
        id: 5,
        title: "3D Rendering and Design",
        category: "3D render",
        images:[
            {src : "/src/public/css/images-portfolio/3D/A02.jpg",
                width: "100%", 
                maxWidth: "500px",
                height: "auto"},
            {src : "/src/public/css/images-portfolio/3D/บ้านมุม 1.3.png",
                width: "100%", 
                maxWidth: "500px",
                height: "auto"},
            
            {src : "/src/public/css/images-portfolio/3D/home.jpg",
                width: "100%", 
                maxWidth: "500px",
                height: "auto"},
            
            {src : "/src/public/css/images-portfolio/3D/ห้องนอน 1_2023-09-08-01-11-56.jpg",
                width: "100%", 
                maxWidth: "500px",
                height: "auto"},
            
            {src : "/src/public/css/images-portfolio/3D/ห้องนอน 2_2023-09-08-01-11-56.jpg",
                width: "100%", 
                maxWidth: "500px",
                height: "auto"},

            {src : "/src/public/css/images-portfolio/3D/ครัว1.png",
                width: "100%", 
                maxWidth: "500px",
                height: "auto"},

            {src : "/src/public/css/images-portfolio/3D/ครัว2.png",
                width: "100%", 
                maxWidth: "500px",
                height: "auto"},

            {src : "/src/public/css/images-portfolio/3D/ห้อง 2 มุม Eye.png",
                width: "100%", 
                maxWidth: "500px",
                height: "auto"},

            {src : "/src/public/css/images-portfolio/3D/ห้อง 1 มุม Eye.png",
                width: "100%", 
                maxWidth: "500px",
                height: "auto"},
            

        ],
        visibleImagesCount: 2, // กำหนดให้แสดงผล n รูปแรก
        initialVisible: 2
         
    }

          
    // เพิ่มโปรเจ็กต์อื่นๆ ตามต้องการ
];

// แสดงปุ่มหมวดหมู่
function renderCategoryFilter() {
    // กำหนดหมวดหมู่ทั้งหมดที่มี
    const categories_show = ['all'];
    const categories = ['all', 'Web', 'Ui design & banner', '3D render'];

    // ดึง element ที่จะใส่ปุ่มหมวดหมู่
    const filterContainer = document.querySelector('.category-filter');
    
    // สร้าง HTML สำหรับปุ่มแต่ละหมวดหมู่
    filterContainer.innerHTML = categories_show
        .map(category => `
            <select class="filter-select">
                ${categories.map(category => `
                    <option value="${category}" 
                            ${state.selectedCategory === category ? 'selected' : ''}>
                            ${category.toUpperCase()}
                    </option>
                `).join('')}
            </select>
        `).join('');
    // state.selectedCategory === category ? 'active' : '' 
    // เช็คว่าหมวดหมู่ปัจจุบันตรงกับปุ่มไหน ถ้าตรงให้เพิ่ม class 'active'

    // เพิ่ม Event Listener สำหรับปุ่มกรอง
    const filterSelect = document.querySelector('.filter-select');
    filterSelect.addEventListener('change', (event) => {
        const category = event.target.value;
        updateCategory(category);
    });
}

// ฟังก์ชันสำหรับเรนเดอร์โปรเจ็กต์
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    const filteredProjects = state.selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === state.selectedCategory);
  
    projectsGrid.innerHTML = filteredProjects.map(project => {
      // เลือกรูปที่จะแสดงตาม visibleImagesCount ของโปรเจ็กต์นั้น ๆ
      const visibleImages = project.images.slice(0, project.visibleImagesCount);
      // เช็คเงื่อนไขของโปรเจ็กต์นั้น ๆ ว่ายังมีรูปเพิ่มเติมหรือไม่
      let iconMarkup = "";
        if (project.images.length > project.visibleImagesCount) {
            if (project.visibleImagesCount < project.images.length) {
                // แสดงปุ่ม Learn More ถ้ายังมีภาพเพิ่มเติม
                iconMarkup = `<img class="load-more icon_lucide" src="/src/public/css/icons/more-svgrepo-com (1).png" data-project-id="${project.id}" style="cursor: pointer;">`;
            } else if (project.visibleImagesCount > 5) {
                // แสดงปุ่ม Collapse ถ้าภาพถูกขยายมากกว่า 5
                iconMarkup = `<img class="load-more icon_lucide" src="/src/public/css/icons/more-svgrepo-com (3).png" data-project-id="${project.id}" style="cursor: pointer;">`;
            }
        }
      return `
        <div class="project-card" data-project-id="${project.id}">
          <span class="tag">${project.category}</span>
          <h3>${project.title}</h3>
          <div class="border-project-card">
          <div class="images-container">
            ${visibleImages.map(image => `
              <img src="${image.src}" alt="${project.title}" class="project-image visible"  
              style="width: ${image.width}; 
              max-width: ${image.maxWidth};
              height: ${image.height};
              ">
            `).join('')}
          </div>
          </div>
          <div class="border-learnMore">
            ${iconMarkup}
          </div>
        </div>
      `;
    }).join('');

  
    // ผูก event listener กับ container หลักของโปรเจ็กต์
    document.querySelector('.projects-grid').addEventListener('click', event => {
        const loadMoreElement = event.target.closest('.load-more');
        if (loadMoreElement) {
            const projectId = parseInt(loadMoreElement.getAttribute('data-project-id'), 10);
            const projectIndex = projects.findIndex(p => p.id === projectId);
    
            if (projectIndex !== -1) {
                const project = projects[projectIndex];
    
                // ถ้ายังไม่ได้กำหนด initialVisible ให้กำหนดค่าตั้งต้น
                if (!project.hasOwnProperty('initialVisible')) {
                    project.initialVisible = project.visibleImagesCount;
                }
    
                // เช็คว่ามีรูปเพิ่มเติมให้โหลดหรือไม่
                if (project.visibleImagesCount < project.images.length) {
                    project.visibleImagesCount += 5;
                    if (project.visibleImagesCount > project.images.length) {
                        project.visibleImagesCount = project.images.length;
                    }
                } else {
                    // ถ้าครบแล้วให้กลับไปค่าเริ่มต้น
                    project.visibleImagesCount = project.initialVisible;
                }
    
                // อัปเดตเฉพาะโปรเจ็กต์ที่เปลี่ยนแปลง โดยไม่ต้อง render ใหม่ทั้งหมด
                updateProjectDOM(project);
            }
            
        }
    });
    
    // ฟังก์ชันอัปเดตเฉพาะโปรเจ็กต์ที่เปลี่ยนแปลง
    function updateProjectDOM(project) {
        const projectCard = document.querySelector(`.project-card[data-project-id="${project.id}"]`);
        if (projectCard) {
            const imagesContainer = projectCard.querySelector('.border-project-card');
            imagesContainer.innerHTML = project.images
                .slice(0, project.visibleImagesCount)
                .map(image => `<img src="${image.src}" alt="${project.title}" class="project-image " style="width: ${image.width}; max-width: ${image.maxWidth}; height: ${image.height};">`)
                .join('');
            
             // ใช้ setTimeout เล็กน้อยเพื่อรอ reflow แล้วค่อยเพิ่มคลาส visible ให้กับทุกภาพ
            setTimeout(() => {
            const images = projectCard.querySelectorAll('.project-image:not(.visible)');
            images.forEach(image => image.classList.add('visible'));
            }, 10); // 10 มิลลิวินาที ค่าที่เหมาะสมอาจปรับได้ตามต้องการ

            // อัปเดต icon
            const loadMoreIcon = projectCard.querySelector('.load-more');
            if (loadMoreIcon) {
                loadMoreIcon.src = project.visibleImagesCount < project.images.length
                    ? "/src/public/css/icons/more-svgrepo-com (1).png"
                    : "/src/public/css/icons/more-svgrepo-com (3).png";
            }
        }
    }
    
    
    
     
      
}
  

document.addEventListener("DOMContentLoaded", function() {
    // Ensure lucide is loaded before calling createIcons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.error("Lucide library is not loaded.");
    }
});

// Update functions
function updateCategory(category) {
    state.selectedCategory = category;
    renderCategoryFilter();
    renderProjects();
}

// Toggle navigation menu
const navbarToggle = document.getElementById('navbar-toggle');
const navMenu = document.getElementById('nav-menu');

navbarToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navbarToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // ลบออกเมื่อออกจาก viewport
            }
        });
    });

    document.querySelectorAll('.fade').forEach(element => {
        observer.observe(element);
    });
});


// Initial render
renderProjects();
renderCategoryFilter();
