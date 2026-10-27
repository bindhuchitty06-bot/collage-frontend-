/**
 * Bindhu Institute of Technology (BIT) - Interactive Student Ambassador & Counselor
 * Authentic human-centered student advisor engine powered by real campus data and student insights.
 */

class BitAssistant {
  constructor(options = {}) {
    this.currentCampusId = options.currentCampusId || "bengaluru";
    this.messages = [];
    this.isTyping = false;
    this.soundEnabled = true;
    this.speechEnabled = false;
    this.audioContext = null;
    this.counselorName = "Priya Sharma";
    this.counselorRole = "Senior Student Ambassador & Admissions Mentor (Batch of '26)";

    this.initAudioContext();
  }

  initAudioContext() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
      }
    } catch (e) {
      console.warn("Web Audio not supported", e);
    }
  }

  playPopSound(type = "incoming") {
    if (!this.soundEnabled || !this.audioContext) return;
    try {
      if (this.audioContext.state === "suspended") {
        this.audioContext.resume();
      }
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      const now = this.audioContext.currentTime;
      if (type === "incoming") {
        osc.frequency.setValueAtTime(540, now);
        osc.frequency.exponentialRampToValueAtTime(840, now + 0.12);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.13);
      } else {
        osc.frequency.setValueAtTime(420, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.09);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
        osc.start(now);
        osc.stop(now + 0.1);
      }
    } catch (e) {
      // Ignore audio failure
    }
  }

  setCampus(campusId) {
    if (BIT_DATA.campuses[campusId]) {
      this.currentCampusId = campusId;
    }
  }

  processQuestion(query) {
    const raw = (query || "").trim();
    if (!raw) {
      return {
        text: "Hey! I'm Priya. Ask me anything — whether it's cutoffs, hostel food, professors, or our ₹54.2 LPA placements!",
        suggestions: ["Admissions Process", "Highest Package", "Campuses & Hostels", "Scholarships"]
      };
    }

    const clean = raw.toLowerCase();
    const currentCampus = BIT_DATA.campuses[this.currentCampusId];

    // 1. Direct Greetings & Introductions
    if (/^(hi|hello|hey|yo|namaste|good morning|good afternoon|good evening|pranam)\b/.test(clean)) {
      return {
        text: `Hey there! 😊 I'm <strong>Priya Sharma</strong>, final-year Computer Science & AI student and Chief Student Ambassador here at <strong>Bindhu Institute of Technology (BIT)</strong>.<br><br>I'm hanging out at the Central Library right now. Whether you're a curious student or a parent wondering about our <strong>4 campuses (Bengaluru, Hyderabad, Chennai, Pune)</strong>, fee waivers, or hostel rooms, ask me anything!`,
        suggestions: [
          "What is BIT's highest placement?",
          "Tell me about Bengaluru campus",
          "How to get 100% scholarship?",
          "Hostel rooms & food menu"
        ]
      };
    }

    if (/^(who are you|what is your name|your name|who is priya)\b/.test(clean)) {
      return {
        text: `I'm <strong>Priya Sharma</strong>! 👋 I'm in my final year studying B.Tech in CSE (Artificial Intelligence) at BIT. I lead the Student Ambassador Desk alongside our Admissions Directorate.<br><br>I've personally spent time across both Bengaluru and Hyderabad campuses, done internships with NVIDIA, and helped dozens of freshers find their dream branch. Ask away!`,
        suggestions: ["CSE & AI Curriculum", "Placements 2026", "Campus Tour Walk", "Hostel Life"]
      };
    }

    // 2. Specific Campus Queries
    for (const [key, campus] of Object.entries(BIT_DATA.campuses)) {
      const mentionsCity = clean.includes(key) || clean.includes(campus.shortName.toLowerCase());
      if (mentionsCity) {
        if (clean.includes("placement") || clean.includes("package") || clean.includes("salary") || clean.includes("job")) {
          return {
            text: `📊 <strong>Placements at ${campus.name}</strong>:<br>Honestly, the stats speak for themselves!<ul><li>🌟 <strong>Highest CTC</strong>: ${campus.stats.highestPackage}</li><li>📈 <strong>Average CTC</strong>: ${campus.stats.avgPackage}</li><li>🎯 <strong>Placement Ratio</strong>: ${campus.stats.placementRate}</li><li>🏢 <strong>Top Recruiters in ${campus.shortName}</strong>: ${campus.topRecruiters.join(", ")}</li></ul>Over 60% of our batch converts their 3rd-year internships into full-time pre-placement offers (PPOs)!`,
            action: { label: `Explore ${campus.shortName} Campus`, campusId: key },
            suggestions: [`Hostels at ${campus.shortName}`, "Fee calculator", "How to apply here", "Talk to Counselor"]
          };
        }

        if (clean.includes("dean") || clean.includes("director") || clean.includes("faculty") || clean.includes("professor")) {
          return {
            text: `🎓 <strong>Meet the Dean at ${campus.shortName}</strong>:<br><strong>${campus.dean.name}</strong> (${campus.dean.title})<br><em>${campus.dean.credentials}</em><br><br>💬 <em>"${campus.dean.quote}"</em><br><br>The faculty-to-student ratio is <strong>1:12</strong>, so you actually get to do research papers directly with professors!`,
            suggestions: [`Research labs at ${campus.shortName}`, "Contact Admissions", "Scholarships"]
          };
        }

        if (clean.includes("lab") || clean.includes("facility") || clean.includes("research") || clean.includes("arena")) {
          return {
            text: `🔬 <strong>Signature Facility at ${campus.shortName}</strong>:<br><strong>${campus.signatureLab}</strong>.<br><br>Students get hands-on access from Year 1! Our top specializations here are:<ul>${campus.topSpecialties.map(s => `<li>${s}</li>`).join("")}</ul>`,
            action: { label: `Switch to ${campus.shortName} View`, campusId: key },
            suggestions: ["Book Campus Walk", "Computer Science courses", "Placements"]
          };
        }

        if (clean.includes("address") || clean.includes("where") || clean.includes("location") || clean.includes("reach") || clean.includes("metro")) {
          return {
            text: `📍 <strong>Getting to ${campus.name}</strong>:<br><strong>Address</strong>: ${campus.address}<br><br>🚆 <strong>Nearest Metro</strong>: ${campus.metro}<br>📞 <strong>Direct Campus Desk</strong>: <a href="tel:${campus.phone.replace(/[^0-9+]/g, '')}" style="color: var(--primary); font-weight: 700;">${campus.phone}</a><br>✉️ <strong>Admissions Email</strong>: ${campus.email}`,
            action: { label: `View ${campus.shortName} Details`, campusId: key },
            suggestions: ["Schedule In-Person Visit", "Hostel accommodation", "Fee structure"]
          };
        }

        // General campus overview
        return {
          text: `🏫 <strong>Here's the scoop on BIT ${campus.name}</strong>:<br>• <strong>Location</strong>: ${campus.state} (${campus.landArea})<br>• <strong>Vibe & Specialty</strong>: ${campus.badge}<br>• <strong>Average Package</strong>: ${campus.stats.avgPackage} (Highest: ${campus.stats.highestPackage})<br>• <strong>Signature Lab</strong>: ${campus.signatureLab}<br>• <strong>Active Student Clubs</strong>: ${campus.stats.activeClubs}<br><br>Would you like to switch to this campus on the screen or book a free walkthrough?`,
          action: { label: `Switch Active View to ${campus.shortName}`, campusId: key },
          suggestions: [`Placements at ${campus.shortName}`, `Courses at ${campus.shortName}`, "Book Campus Tour", "Other Campuses"]
        };
      }
    }

    // 3. Database Search
    let bestMatch = null;
    let highestScore = 0;

    for (const item of BIT_QA_DATABASE) {
      let score = 0;
      for (const kw of item.keywords) {
        if (clean.includes(kw)) {
          score += kw.length * 2;
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && highestScore >= 6) {
      return {
        text: bestMatch.answer,
        matchedQuestion: bestMatch.question,
        suggestions: this.getRelatedSuggestions(bestMatch.keywords)
      };
    }

    // 4. Topic-Based Human Insights
    if (clean.includes("food") || clean.includes("mess") || clean.includes("canteen") || clean.includes("maggi") || clean.includes("coffee") || clean.includes("cafe")) {
      return {
        text: `🍲 <strong>Real Talk on Food at BIT</strong>:<br>As someone who eats at the canteen every single day, I can vouch for it! 😊<br>• <strong>Mess Dining</strong>: 4 meals a day. Hot South Indian breakfast (crispy dosas, idlis, sambar) and North Indian lunch/dinner (paneer butter masala, rajma chawal, egg/chicken curry, and warm rotis).<br>• <strong>Food Courts & Cafes</strong>: Each campus has a 24/7 <em>Cafe BIT</em> where we grab espresso, burgers, wraps, and late-night Maggi during hackathon prep!<br>• There are separate vegetarian and non-vegetarian live kitchens, and food hygiene audits are run monthly by student reps.`,
        suggestions: ["Hostel room options", "Hostel in-time rules", "Campus sports facilities"]
      };
    }

    if (clean.includes("ragging") || clean.includes("safe") || clean.includes("security") || clean.includes("girls")) {
      return {
        text: `🛡️ <strong>Safety & Anti-Ragging Guarantee</strong>:<br>I can tell you with 100% honesty: BIT has a <strong>strict Zero-Tolerance Anti-Ragging Policy</strong>. All campuses are equipped with 24/7 biometric gates, 300+ CCTV cameras, campus marshals, and well-lit walkways.<br><br>Our seniors act like mentors and elder siblings—they help freshers set up their code editors, debug assignments, and prep for interviews. We also have a 24/7 Women's Safety Cell and dedicated counseling doctors on campus.`,
        suggestions: ["Hostel facilities", "Campus Medical Center", "Contact Admissions"]
      };
    }

    if (clean.includes("curfew") || clean.includes("timing") || clean.includes("in time") || clean.includes("late")) {
      return {
        text: `⏰ <strong>Hostel Timings & Night Out Pass</strong>:<br>The standard hostel check-in is <strong>10:30 PM</strong>. But here's the best part: if you are working in the Innovation Garage, Robotics Lab, or preparing for an inter-college hackathon, you can generate an instant <strong>Late-Night Digital Lab Pass</strong> right on the BIT Student App with automated SMS alerts to parents!`,
        suggestions: ["Hostel rooms & AC", "Maker Garage 24/7", "Mess food"]
      };
    }

    if (clean.includes("laptop") || clean.includes("pc") || clean.includes("mac") || clean.includes("spec")) {
      return {
        text: `💻 <strong>Laptop Specs for First Years</strong>:<br>Any standard laptop with 16GB RAM, 512GB SSD, and an Intel i5 / AMD Ryzen 5 or Apple M-series works great for your first two years. For heavy GPU machine learning or 3D CAD modeling, BIT gives every student cloud access to our <strong>NVIDIA DGX Supercomputing Cluster</strong>, so you don't need a heavy gaming laptop!`,
        suggestions: ["Computer Science Curriculum", "Robotics Labs", "Software provided"]
      };
    }

    // 5. Friendly Open-Ended Human Response
    return {
      text: `That's a really great question regarding <em>"${raw}"</em>! 🎓<br><br>At <strong>Bindhu Institute of Technology (BIT)</strong>, whether it's our academic curriculum, autonomous labs, or campus community across <strong>Bengaluru, Hyderabad, Chennai, and Pune</strong>, we make sure students get the best four years of their lives.<br><br>Would you like to schedule an in-person campus walkthrough or check your personalized scholarship discount?`,
      suggestions: [
        "Calculate my Scholarship",
        "Book Campus Walk",
        "Campuses & Transfers",
        "Placement Statistics",
        "Call Admissions: 1800-425-BINDHU"
      ]
    };
  }

  getRelatedSuggestions(keywords) {
    if (keywords.includes("placement") || keywords.includes("salary")) {
      return ["Which companies hire at BIT?", "Top campus for AI?", "Internship opportunities"];
    }
    if (keywords.includes("admission") || keywords.includes("eligibility")) {
      return ["Tuition fee & scholarships", "Hostel accommodation", "BSAT Exam dates"];
    }
    if (keywords.includes("fees") || keywords.includes("scholarship")) {
      return ["Calculate my scholarship", "Hostel cost", "Placement stats"];
    }
    return ["Bengaluru Campus", "Hyderabad Campus", "Chennai Campus", "Pune Campus"];
  }

  speakText(plainText) {
    if (!this.speechEnabled || !this.synth) return;
    try {
      this.synth.cancel();
      const textToSpeak = plainText.replace(/<[^>]*>?/gm, "").substring(0, 200);
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 1.05;
      utterance.pitch = 1.1;
      this.synth.speak(utterance);
    } catch (e) {
      console.warn("Speech error", e);
    }
  }
}

window.BitAssistant = BitAssistant;
