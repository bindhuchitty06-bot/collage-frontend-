/**
 * Bindhu Institute of Technology (BIT) - Main Application Controller
 * Handles dynamic campus switching, student noticeboard, interactive day-in-life timeline,
 * calculators, virtual spaces preview, course explorer, and human student counselor chat.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize State
  const state = {
    activeCampus: "bengaluru",
    theme: localStorage.getItem("bit-theme") || "light",
    scholarshipData: {
      boardScore: 92,
      entranceRank: "rank-8000",
      hostelType: "ac"
    },
    campusReactions: {
      cheer: 1420,
      love: 2890,
      inspire: 980,
      fire: 1650
    }
  };

  // Initialize Assistant
  const assistant = new BitAssistant({ currentCampusId: state.activeCampus });

  // DOM Elements
  const campusSelectorButtons = document.querySelectorAll("[data-campus-target]");
  const campusHeaderSelect = document.getElementById("header-campus-select");
  const heroBadge = document.getElementById("hero-campus-badge");
  const campusTitleEl = document.getElementById("active-campus-title");
  const campusTaglineEl = document.getElementById("active-campus-tagline");
  const campusWeatherEl = document.getElementById("campus-weather-indicator");
  const campusHeroImg = document.getElementById("campus-hero-visual");
  const campusSpecialtiesContainer = document.getElementById("campus-specialties-tags");

  // Stats Elements
  const statAvgEl = document.getElementById("stat-avg-package");
  const statHighEl = document.getElementById("stat-high-package");
  const statRateEl = document.getElementById("stat-placement-rate");
  const statClubsEl = document.getElementById("stat-active-clubs");

  // Dean & Contact Elements
  const deanNameEl = document.getElementById("dean-name");
  const deanTitleEl = document.getElementById("dean-title");
  const deanCredentialsEl = document.getElementById("dean-credentials");
  const deanQuoteEl = document.getElementById("dean-quote");
  const campusAddressEl = document.getElementById("campus-address-text");
  const campusPhoneEl = document.getElementById("campus-phone-link");
  const campusEmailEl = document.getElementById("campus-email-link");
  const campusMetroEl = document.getElementById("campus-metro-text");
  const campusSignatureLabEl = document.getElementById("campus-signature-lab-badge");

  // Virtual Tour & Notice Board Containers
  const tourGalleryContainer = document.getElementById("virtual-tour-cards");
  const noticeBoardContainer = document.getElementById("notice-board-cards");
  const dayTimelineContainer = document.getElementById("day-timeline-cards");

  // Chat Elements
  const inpageChatMessages = document.getElementById("inpage-chat-messages");
  const inpageChatInput = document.getElementById("inpage-chat-input");
  const inpageChatSend = document.getElementById("inpage-chat-send");
  const inpageChatSuggestions = document.getElementById("inpage-chat-suggestions");

  const floatingChatToggle = document.getElementById("floating-chat-toggle");
  const floatingChatWindow = document.getElementById("floating-chat-window");
  const floatingChatClose = document.getElementById("floating-chat-close");
  const floatingChatMessages = document.getElementById("floating-chat-messages");
  const floatingChatInput = document.getElementById("floating-chat-input");
  const floatingChatSend = document.getElementById("floating-chat-send");
  const floatingChatBadge = document.getElementById("floating-chat-badge");

  // Modals & Dialogs
  const tourModal = document.getElementById("tour-booking-modal");
  const tourPassModal = document.getElementById("tour-pass-modal");
  const courseModal = document.getElementById("course-details-modal");
  const scholarshipModal = document.getElementById("scholarship-cert-modal");
  const openTourButtons = document.querySelectorAll(".btn-open-tour-modal");

  // Initialize Theme
  applyTheme(state.theme);
  const themeToggleButtons = document.querySelectorAll(".theme-toggle-btn");
  themeToggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(newTheme);
    });
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("bit-theme", theme);
    const icons = document.querySelectorAll(".theme-toggle-icon");
    icons.forEach(ic => {
      ic.textContent = theme === "dark" ? "☀️" : "🌙";
    });
  }

  // ==========================================
  // Campus Switcher Logic (Seamless & Reliable)
  // ==========================================
  function switchCampus(campusId) {
    if (!BIT_DATA.campuses[campusId]) return;
    state.activeCampus = campusId;
    assistant.setCampus(campusId);

    const campus = BIT_DATA.campuses[campusId];

    // Update active tab buttons
    campusSelectorButtons.forEach(btn => {
      const target = btn.getAttribute("data-campus-target");
      if (target === campusId) {
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      }
    });

    if (campusHeaderSelect) {
      campusHeaderSelect.value = campusId;
    }

    // Smooth transition
    const animatedSections = [
      document.getElementById("campus-showcase-panel"),
      document.getElementById("hero-dynamic-card")
    ];

    animatedSections.forEach(sec => {
      if (sec) {
        sec.style.opacity = "0.6";
        sec.style.transform = "translateY(4px)";
      }
    });

    setTimeout(() => {
      // Update DOM
      if (heroBadge) {
        heroBadge.innerHTML = `📍 Exploring: <strong>${campus.shortName} Campus</strong> • ${campus.badge}`;
      }
      if (campusTitleEl) {
        campusTitleEl.textContent = campus.name;
      }
      if (campusTaglineEl) {
        campusTaglineEl.textContent = campus.tagline;
      }
      if (campusWeatherEl) {
        campusWeatherEl.innerHTML = `🌤️ ${campus.weather}`;
      }
      if (campusHeroImg) {
        campusHeroImg.src = campus.heroImage;
        campusHeroImg.alt = `${campus.name} Campus Ground`;
      }
      if (campusSignatureLabEl) {
        campusSignatureLabEl.textContent = `🔬 ${campus.signatureLab}`;
      }

      // Specialties
      if (campusSpecialtiesContainer) {
        campusSpecialtiesContainer.innerHTML = campus.topSpecialties
          .map(spec => `<span class="specialty-pill">✨ ${spec}</span>`)
          .join("");
      }

      // Stats
      animateStatValue(statAvgEl, campus.stats.avgPackage);
      animateStatValue(statHighEl, campus.stats.highestPackage);
      animateStatValue(statRateEl, campus.stats.placementRate);
      animateStatValue(statClubsEl, campus.stats.activeClubs);

      // Dean & Contact
      if (deanNameEl) deanNameEl.textContent = campus.dean.name;
      if (deanTitleEl) deanTitleEl.textContent = campus.dean.title;
      if (deanCredentialsEl) deanCredentialsEl.textContent = campus.dean.credentials;
      if (deanQuoteEl) deanQuoteEl.textContent = `“${campus.dean.quote}”`;

      if (campusAddressEl) campusAddressEl.textContent = campus.address;
      if (campusPhoneEl) {
        campusPhoneEl.textContent = campus.phone;
        campusPhoneEl.href = `tel:${campus.phone.replace(/[^0-9+]/g, '')}`;
      }
      if (campusEmailEl) {
        campusEmailEl.textContent = campus.email;
        campusEmailEl.href = `mailto:${campus.email}`;
      }
      if (campusMetroEl) campusMetroEl.textContent = campus.metro;

      // Update Virtual Tour Gallery
      renderVirtualTourGallery(campus);

      // Reset animation
      animatedSections.forEach(sec => {
        if (sec) {
          sec.style.opacity = "1";
          sec.style.transform = "translateY(0)";
        }
      });

      // Recalculate scholarship if needed
      updateScholarshipDisplay();

      // Notify in chat with friendly student ambassador message
      const campusNotice = `Switched focus to <strong>${campus.name}</strong> (${campus.badge}). Let me know if you want to know about hostels, mess food, or professors at this campus!`;
      addBotMessage(campusNotice, inpageChatMessages, ["Hostels at this campus", "Placements at " + campus.shortName, "Directions to campus"]);
    }, 150);
  }

  function animateStatValue(el, targetValue) {
    if (!el) return;
    el.style.transform = "scale(0.85)";
    el.style.opacity = "0.5";
    setTimeout(() => {
      el.textContent = targetValue;
      el.style.transform = "scale(1)";
      el.style.opacity = "1";
    }, 120);
  }

  function renderVirtualTourGallery(campus) {
    if (!tourGalleryContainer) return;
    tourGalleryContainer.innerHTML = campus.virtualViews
      .map((view, idx) => `
        <div class="virtual-view-card group" data-idx="${idx}">
          <div class="view-image-wrap">
            <img src="${view.image}" alt="${view.title}" loading="lazy" class="view-image" />
            <span class="view-category-badge">${view.category}</span>
            <button class="view-preview-btn" onclick="window.previewTourImage('${view.image}', '${view.title}', '${view.caption.replace(/'/g, "\\'")}')">
              <span>🔍 360° View</span>
            </button>
          </div>
          <div class="view-info">
            <h4 class="view-title">${view.title}</h4>
            <p class="view-desc">${view.caption}</p>
          </div>
        </div>
      `)
      .join("");
  }

  // Render Notice Board
  function renderNoticeBoard() {
    if (!noticeBoardContainer) return;
    noticeBoardContainer.innerHTML = BIT_DATA.noticeBoard
      .map(n => `
        <div class="notice-card">
          <div>
            <span class="notice-tag-badge" style="background: ${n.color}15; color: ${n.color}; border: 1px solid ${n.color}35;">
              📌 ${n.tag}
            </span>
            <h4 class="notice-title">${n.title}</h4>
            <p class="notice-content">${n.content}</p>
          </div>
          <div class="notice-meta">
            <span>By: ${n.author}</span>
            <span style="font-weight: 700;">${n.date}</span>
          </div>
        </div>
      `)
      .join("");
  }

  // Render Day in Life Timeline
  function renderDayTimeline() {
    if (!dayTimelineContainer) return;
    dayTimelineContainer.innerHTML = BIT_DATA.dayInLife
      .map(slot => `
        <div class="timeline-slot-card">
          <div>
            <span class="timeline-time-badge">⏰ ${slot.time}</span>
            <h4 class="timeline-title">${slot.title}</h4>
            <p class="timeline-loc">📍 ${slot.loc}</p>
            <p class="timeline-desc">${slot.desc}</p>
          </div>
        </div>
      `)
      .join("");
  }

  // Campus Selector Listeners
  campusSelectorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-campus-target");
      switchCampus(target);
    });
  });

  if (campusHeaderSelect) {
    campusHeaderSelect.addEventListener("change", (e) => {
      switchCampus(e.target.value);
    });
  }

  // ==========================================
  // Programs & Course Explorer Filter
  // ==========================================
  const programCategoryButtons = document.querySelectorAll("[data-program-filter]");
  const programsContainer = document.getElementById("programs-grid");

  function renderPrograms(category = "all") {
    if (!programsContainer) return;
    const filtered = category === "all"
      ? BIT_DATA.programs
      : BIT_DATA.programs.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));

    programsContainer.innerHTML = filtered.map(prog => `
      <div class="program-card" data-program-code="${prog.code}">
        <div class="program-card-header">
          <span class="program-tag" style="background: ${prog.badgeColor}18; color: ${prog.badgeColor}; border: 1px solid ${prog.badgeColor}40;">
            ${prog.tag}
          </span>
          <span class="program-duration">⏱️ ${prog.duration}</span>
        </div>
        <h3 class="program-title">${prog.title}</h3>
        <p class="program-desc">${prog.description}</p>
        
        <div class="program-meta-chips">
          ${prog.keyCourses.slice(0, 3).map(k => `<span class="meta-chip">📘 ${k}</span>`).join("")}
        </div>

        <div class="program-card-footer">
          <div class="program-stat">
            <span class="pstat-label">Avg Package</span>
            <span class="pstat-val">${prog.avgPlacement}</span>
          </div>
          <div class="program-stat">
            <span class="pstat-label">Max Offer</span>
            <span class="pstat-val" style="color: #10B981;">${prog.highestOffer}</span>
          </div>
          <button class="btn-program-details" onclick="window.openCourseModal('${prog.code}')">
            Curriculum ➔
          </button>
        </div>
      </div>
    `).join("");
  }

  programCategoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      programCategoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-program-filter");
      renderPrograms(filter);
    });
  });

  window.openCourseModal = (courseCode) => {
    const program = BIT_DATA.programs.find(p => p.code === courseCode);
    if (!program || !courseModal) return;

    document.getElementById("modal-course-title").textContent = program.title;
    document.getElementById("modal-course-category").textContent = program.category;
    document.getElementById("modal-course-desc").textContent = program.description;
    document.getElementById("modal-course-avg").textContent = program.avgPlacement;
    document.getElementById("modal-course-high").textContent = program.highestOffer;
    document.getElementById("modal-course-seats").textContent = program.seats;

    const subjectsContainer = document.getElementById("modal-course-subjects");
    if (subjectsContainer) {
      subjectsContainer.innerHTML = program.keyCourses
        .map(c => `<div class="subject-item">📌 <strong>${c}</strong><br><small style="color: var(--text-muted);">Includes 40+ hours industrial lab practice & live capstone.</small></div>`)
        .join("");
    }

    courseModal.showModal();
  };

  // ==========================================
  // Scholarship & Fee Calculator
  // ==========================================
  const scoreSlider = document.getElementById("score-slider");
  const scoreValueDisplay = document.getElementById("score-value-display");
  const rankSelect = document.getElementById("rank-select");
  const hostelRadios = document.querySelectorAll('input[name="calc-hostel"]');

  const calcWaiverPercentEl = document.getElementById("calc-waiver-pct");
  const calcTierNameEl = document.getElementById("calc-tier-name");
  const calcNetTuitionEl = document.getElementById("calc-net-tuition");
  const calcTotalPayableEl = document.getElementById("calc-total-payable");
  const calcAnnualSavingsEl = document.getElementById("calc-annual-savings");

  function calculateScholarship() {
    const score = parseInt(scoreSlider ? scoreSlider.value : "92", 10);
    const rank = rankSelect ? rankSelect.value : "rank-8000";
    let selectedHostel = "none";
    hostelRadios.forEach(r => {
      if (r.checked) selectedHostel = r.value;
    });

    if (scoreValueDisplay) {
      scoreValueDisplay.textContent = `${score}%`;
    }

    // Determine scholarship tier
    let matchedScholarship = null;
    for (const tier of BIT_DATA.feeStructure.scholarships) {
      if (score >= tier.minScore) {
        matchedScholarship = tier;
        break;
      }
    }

    if (rank === "rank-2500") {
      matchedScholarship = BIT_DATA.feeStructure.scholarships[0];
    } else if (rank === "rank-8000" && (!matchedScholarship || matchedScholarship.waiverPct < 75)) {
      matchedScholarship = BIT_DATA.feeStructure.scholarships[1];
    }

    const waiverPct = matchedScholarship ? matchedScholarship.waiverPct : 0;
    const tierName = matchedScholarship ? matchedScholarship.name : "Standard Merit Admission";

    const baseTuition = BIT_DATA.feeStructure.baseAnnualTuition;
    const discount = (baseTuition * waiverPct) / 100;
    const netTuition = baseTuition - discount;

    let hostelCost = 0;
    if (selectedHostel === "non-ac") {
      hostelCost = BIT_DATA.feeStructure.hostelNonAC + BIT_DATA.feeStructure.messCharges;
    } else if (selectedHostel === "ac") {
      hostelCost = BIT_DATA.feeStructure.hostelAC + BIT_DATA.feeStructure.messCharges;
    }

    const totalPayable = netTuition + hostelCost;

    if (calcWaiverPercentEl) calcWaiverPercentEl.textContent = `${waiverPct}%`;
    if (calcTierNameEl) calcTierNameEl.textContent = tierName;
    if (calcNetTuitionEl) calcNetTuitionEl.textContent = `₹${netTuition.toLocaleString("en-IN")}/yr`;
    if (calcTotalPayableEl) calcTotalPayableEl.textContent = `₹${totalPayable.toLocaleString("en-IN")}/yr`;
    if (calcAnnualSavingsEl) calcAnnualSavingsEl.textContent = `You Save ₹${(discount * 4).toLocaleString("en-IN")} over 4 years! 🎉`;

    state.scholarshipData = {
      score,
      rank,
      waiverPct,
      tierName,
      netTuition,
      totalPayable,
      savings4Years: discount * 4
    };
  }

  function updateScholarshipDisplay() {
    calculateScholarship();
  }

  if (scoreSlider) scoreSlider.addEventListener("input", calculateScholarship);
  if (rankSelect) rankSelect.addEventListener("change", calculateScholarship);
  hostelRadios.forEach(r => r.addEventListener("change", calculateScholarship));

  // Generate Digital Scholarship Certificate
  const btnGenScholarshipCert = document.getElementById("btn-gen-scholarship-cert");
  if (btnGenScholarshipCert) {
    btnGenScholarshipCert.addEventListener("click", () => {
      calculateScholarship();
      const s = state.scholarshipData;
      document.getElementById("cert-student-score").textContent = `${s.score}% Aggregate`;
      document.getElementById("cert-tier-name").textContent = s.tierName;
      document.getElementById("cert-waiver-display").textContent = `${s.waiverPct}% Tuition Waiver Guaranteed`;
      document.getElementById("cert-savings-total").textContent = `₹${s.savings4Years.toLocaleString("en-IN")}`;
      document.getElementById("cert-campus-name").textContent = BIT_DATA.campuses[state.activeCampus].name;
      scholarshipModal.showModal();
    });
  }

  // ==========================================
  // Campus Visit / Pass Generator
  // ==========================================
  const tourForm = document.getElementById("tour-booking-form");
  if (tourForm) {
    tourForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const visitorName = document.getElementById("visitor-name").value || "Prospective Student";
      const visitorCampus = document.getElementById("visitor-campus").value || state.activeCampus;
      const visitorDate = document.getElementById("visitor-date").value || "2026-11-15";
      const visitorSlot = document.getElementById("visitor-slot").value || "Morning 10:00 AM";

      const campusObj = BIT_DATA.campuses[visitorCampus];
      const passId = "BIT-PASS-" + Math.floor(100000 + Math.random() * 900000);

      document.getElementById("pass-visitor-name").textContent = visitorName;
      document.getElementById("pass-id-display").textContent = passId;
      document.getElementById("pass-campus-title").textContent = campusObj.name;
      document.getElementById("pass-slot-time").textContent = `${visitorDate} • ${visitorSlot}`;
      document.getElementById("pass-address").textContent = campusObj.address;

      if (tourModal) tourModal.close();
      if (tourPassModal) tourPassModal.showModal();
    });
  }

  openTourButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const campusSelectInForm = document.getElementById("visitor-campus");
      if (campusSelectInForm) campusSelectInForm.value = state.activeCampus;
      if (tourModal) tourModal.showModal();
    });
  });

  // Preview Tour Image Modal
  const previewModal = document.getElementById("image-preview-modal");
  window.previewTourImage = (imgSrc, title, desc) => {
    if (!previewModal) return;
    document.getElementById("preview-img-tag").src = imgSrc;
    document.getElementById("preview-img-title").textContent = title;
    document.getElementById("preview-img-desc").textContent = desc;
    previewModal.showModal();
  };

  // Close Dialog buttons
  document.querySelectorAll("[data-close-dialog]").forEach(btn => {
    btn.addEventListener("click", () => {
      const dialogId = btn.getAttribute("data-close-dialog");
      const dlg = document.getElementById(dialogId);
      if (dlg) dlg.close();
    });
  });

  document.querySelectorAll("dialog").forEach(dlg => {
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg) {
        dlg.close();
      }
    });
  });

  // ==========================================
  // Interactive Reaction Physics
  // ==========================================
  const reactionButtons = document.querySelectorAll(".btn-reaction");
  reactionButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const type = btn.getAttribute("data-reaction");
      const countEl = btn.querySelector(".reaction-count");
      if (state.campusReactions[type] !== undefined) {
        state.campusReactions[type]++;
        if (countEl) countEl.textContent = state.campusReactions[type];
      }
      btn.classList.add("reacted");
      spawnFlyingEmoji(e.clientX, e.clientY, btn.getAttribute("data-emoji") || "❤️");
    });
  });

  function spawnFlyingEmoji(x, y, emoji) {
    for (let i = 0; i < 5; i++) {
      const span = document.createElement("span");
      span.className = "floating-particle";
      span.textContent = emoji;
      span.style.left = `${x + (Math.random() * 40 - 20)}px`;
      span.style.top = `${y + (Math.random() * 20 - 10)}px`;
      span.style.setProperty("--dx", `${(Math.random() - 0.5) * 80}px`);
      span.style.setProperty("--dy", `-${60 + Math.random() * 60}px`);
      document.body.appendChild(span);

      setTimeout(() => {
        span.remove();
      }, 1000);
    }
  }

  // ==========================================
  // Chatbot UI Synchronization (In-Page & Floating)
  // ==========================================
  function handleSendMessage(inputEl, messagesContainer) {
    const query = inputEl.value.trim();
    if (!query) return;

    inputEl.value = "";
    addUserMessage(query, messagesContainer);
    assistant.playPopSound("outgoing");

    const typingIndicator = showTypingIndicator(messagesContainer);

    setTimeout(() => {
      if (typingIndicator) typingIndicator.remove();

      const response = assistant.processQuestion(query);
      addBotMessage(response.text, messagesContainer, response.suggestions, response.action);
      assistant.playPopSound("incoming");

      if (assistant.speechEnabled) {
        assistant.speakText(response.text);
      }
    }, 450);
  }

  function addUserMessage(text, container) {
    if (!container) return;
    const msgDiv = document.createElement("div");
    msgDiv.className = "chat-bubble user-bubble";
    msgDiv.innerHTML = `
      <div class="bubble-content">
        <p>${escapeHTML(text)}</p>
      </div>
    `;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
  }

  function addBotMessage(htmlContent, container, suggestions = [], action = null) {
    if (!container) return;
    const msgDiv = document.createElement("div");
    msgDiv.className = "chat-bubble bot-bubble";

    let actionHTML = "";
    if (action && action.campusId) {
      actionHTML = `
        <div class="chat-action-banner" style="margin-top: 10px;">
          <button class="btn-chat-action btn-secondary" onclick="window.appSwitchCampus('${action.campusId}')" style="font-size: 0.84rem; padding: 6px 14px;">
            📍 ${action.label}
          </button>
        </div>
      `;
    }

    let chipsHTML = "";
    if (suggestions && suggestions.length > 0) {
      chipsHTML = `
        <div class="chat-followup-chips">
          ${suggestions.map(s => `<button class="chip-btn" onclick="window.sendPresetQuestion('${s.replace(/'/g, "\\'")}')">${s}</button>`).join("")}
        </div>
      `;
    }

    msgDiv.innerHTML = `
      <div class="bot-avatar-badge">
        <img src="assets/counselor-priya.jpg" alt="Priya Sharma - BIT Student Ambassador" />
      </div>
      <div class="bubble-content">
        <div class="bubble-text">${htmlContent}</div>
        ${actionHTML}
        ${chipsHTML}
        <div class="bubble-meta">
          <span class="bot-signature">Priya Sharma • BIT Student Ambassador</span>
          <div class="bubble-feedback">
            <button class="btn-fb-thumb" title="Helpful" onclick="this.textContent='👍 Thanks!'">👍</button>
            <button class="btn-fb-thumb" title="Copy text" onclick="navigator.clipboard.writeText(this.closest('.bubble-content').querySelector('.bubble-text').innerText); this.textContent='Copied!'">📋</button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
  }

  function showTypingIndicator(container) {
    if (!container) return null;
    const typingDiv = document.createElement("div");
    typingDiv.className = "chat-bubble bot-bubble typing-indicator-bubble";
    typingDiv.innerHTML = `
      <div class="bot-avatar-badge">
        <img src="assets/counselor-priya.jpg" alt="Priya Sharma" />
      </div>
      <div class="bubble-content">
        <div class="typing-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    container.appendChild(typingDiv);
    container.scrollTop = container.scrollHeight;
    return typingDiv;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  window.sendPresetQuestion = (question) => {
    if (floatingChatWindow && floatingChatWindow.classList.contains("open")) {
      floatingChatInput.value = question;
      handleSendMessage(floatingChatInput, floatingChatMessages);
    } else {
      inpageChatInput.value = question;
      handleSendMessage(inpageChatInput, inpageChatMessages);
      const chatSection = document.getElementById("ask-bit-section");
      if (chatSection) {
        chatSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  window.appSwitchCampus = (campusId) => {
    switchCampus(campusId);
    const showcaseSection = document.getElementById("campus-showcase-panel");
    if (showcaseSection) {
      showcaseSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (inpageChatSend && inpageChatInput) {
    inpageChatSend.addEventListener("click", () => handleSendMessage(inpageChatInput, inpageChatMessages));
    inpageChatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSendMessage(inpageChatInput, inpageChatMessages);
    });
  }

  if (floatingChatSend && floatingChatInput) {
    floatingChatSend.addEventListener("click", () => handleSendMessage(floatingChatInput, floatingChatMessages));
    floatingChatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSendMessage(floatingChatInput, floatingChatMessages);
    });
  }

  if (floatingChatToggle && floatingChatWindow) {
    floatingChatToggle.addEventListener("click", () => {
      floatingChatWindow.classList.toggle("open");
      if (floatingChatBadge) floatingChatBadge.style.display = "none";
      if (floatingChatWindow.classList.contains("open")) {
        floatingChatInput.focus();
        if (floatingChatMessages.children.length === 0) {
          addBotMessage(
            `Hey! I'm <strong>Priya</strong>, Senior Ambassador at BIT. Ask me anything about our 4 campuses, cutoffs, 100% scholarships, or placements! ✨`,
            floatingChatMessages,
            ["Highest Placement CTC?", "Hostel facilities & food", "Bengaluru vs Hyderabad", "Scholarship Calculator"]
          );
        }
      }
    });
  }

  if (floatingChatClose && floatingChatWindow) {
    floatingChatClose.addEventListener("click", () => {
      floatingChatWindow.classList.remove("open");
    });
  }

  // Initial Boot
  switchCampus(state.activeCampus);
  renderNoticeBoard();
  renderDayTimeline();
  renderPrograms("all");
  calculateScholarship();

  // Welcome message in in-page chat
  addBotMessage(
    `Welcome to <strong>Bindhu Institute of Technology (BIT)</strong>! 🎓✨<br>I'm <strong>Priya Sharma</strong>, your Senior Student Ambassador. You can ask me <em>anything</em> — from tuition fees and scholarships to our 54.2 LPA placement records or what campus life is actually like across <strong>Bengaluru, Hyderabad, Chennai, and Pune</strong>!`,
    inpageChatMessages,
    [
      "What is the highest placement package?",
      "Tell me about Bengaluru campus",
      "How do I apply for scholarships?",
      "Hostel facilities & food",
      "Can I visit the campus?"
    ]
  );
});
