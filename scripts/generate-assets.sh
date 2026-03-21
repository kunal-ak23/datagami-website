#!/bin/bash
# Generate missing assets using Gemini 2.5 Flash Image API
# Usage: GEMINI_API_KEY=your_key bash scripts/generate-assets.sh

API_KEY="${GEMINI_API_KEY}"
MODEL="gemini-2.5-flash-image"
IMG_DIR="public/images"

if [ -z "$API_KEY" ]; then
  echo "Error: Set GEMINI_API_KEY environment variable"
  exit 1
fi

generate_image() {
  local prompt="$1"
  local output_path="$2"

  echo "Generating: $output_path"

  local response=$(curl -s -X POST \
    "https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent" \
    -H "x-goog-api-key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d "{
      \"contents\": [{\"parts\": [{\"text\": \"Generate a professional, high-quality image: ${prompt}. No text or watermarks in the image.\"}]}],
      \"generationConfig\": {\"responseModalities\": [\"IMAGE\", \"TEXT\"]}
    }")

  echo "$response" | python3 -c "
import sys, json, base64
data = json.load(sys.stdin)
if 'error' in data:
    print('  ERROR:', data['error'].get('message',''), file=sys.stderr)
    sys.exit(1)
for c in data.get('candidates',[]):
    for p in c.get('content',{}).get('parts',[]):
        if 'inlineData' in p:
            img_data = base64.b64decode(p['inlineData']['data'])
            with open('${output_path}', 'wb') as f:
                f.write(img_data)
            print(f'  Saved: ${output_path} ({len(img_data)} bytes)')
            sys.exit(0)
print('  ERROR: No image in response', file=sys.stderr)
sys.exit(1)
"

  # Rate limit
  sleep 3
}

echo "=== Generating Missing Assets for Datagami Website ==="
echo ""

# --- GALLERY IMAGES ---
echo "--- Gallery Images (12) ---"
mkdir -p "$IMG_DIR/gallery"

generate_image "Professional photograph of an EdTech conference event in India with diverse audience, modern stage with large presentation screens showing data analytics, warm corporate lighting, event photography" \
  "$IMG_DIR/gallery/event-conference.png"

generate_image "Workshop session in a modern Indian university classroom, students collaborating around laptops, instructor at whiteboard explaining code, bright natural lighting" \
  "$IMG_DIR/gallery/workshop-coding.png"

generate_image "Modern Indian university campus building exterior, students walking on pathways, green landscaping, contemporary glass and concrete architecture, clear blue sky" \
  "$IMG_DIR/gallery/campus-building.png"

generate_image "University graduation ceremony in India, students in black caps and gowns celebrating with diplomas, families cheering, warm golden hour sunlight, joyful atmosphere" \
  "$IMG_DIR/gallery/event-graduation.png"

generate_image "Students working in a modern computer lab with dual monitors showing code, collaborative learning environment, cool ambient lighting, professional photography" \
  "$IMG_DIR/gallery/campus-computer-lab.png"

generate_image "Professional training workshop in a modern co-working space, instructor demonstrating software on large screen to small group, post-it notes on glass wall" \
  "$IMG_DIR/gallery/workshop-training.png"

generate_image "Modern university library interior with study pods, students reading and using laptops, floor to ceiling windows with natural light, warm wood tones, architectural photography" \
  "$IMG_DIR/gallery/campus-library.png"

generate_image "Hackathon event with young Indian developers, teams around tables with laptops and whiteboards, competitive energetic atmosphere, vibrant photography" \
  "$IMG_DIR/gallery/event-hackathon.png"

generate_image "Hands-on electronics workshop, students working with circuit boards, oscilloscopes and FPGA boards on desks, engineering lab setting, close-up detail shot" \
  "$IMG_DIR/gallery/workshop-electronics.png"

generate_image "Modern university campus courtyard with students sitting on benches studying, green trees, contemporary buildings, warm afternoon light, lifestyle photography" \
  "$IMG_DIR/gallery/campus-courtyard.png"

generate_image "Industry guest lecture at a university auditorium, professional speaker presenting to engaged students, modern presentation setup, event photography" \
  "$IMG_DIR/gallery/event-guest-lecture.png"

generate_image "Cloud computing training session, students learning AWS and Azure dashboards on large screens, modern training center, professional education photography" \
  "$IMG_DIR/gallery/workshop-cloud.png"

# --- BLOG FEATURED IMAGES ---
echo ""
echo "--- Blog Images (4) ---"
mkdir -p "$IMG_DIR/blog"

generate_image "Futuristic education technology concept art, modern classroom with holographic displays, AI-powered learning interfaces, students using advanced tech, cinematic blue and purple lighting" \
  "$IMG_DIR/blog/future-edtech.png"

generate_image "Digital payments concept, smartphone showing UPI payment interface with QR code scanning, Indian marketplace in soft focus background, fintech innovation visual" \
  "$IMG_DIR/blog/upi-fintech.png"

generate_image "University career fair, students in professional attire talking to recruiters at company booths, modern convention hall, warm professional lighting" \
  "$IMG_DIR/blog/career-readiness.png"

generate_image "Cloud computing data center, rows of servers with glowing blue LED lights, network cables, modern infrastructure, professional technology photography" \
  "$IMG_DIR/blog/cloud-computing-careers.png"

# --- CASE STUDY IMAGES ---
echo ""
echo "--- Case Study Images (3) ---"
mkdir -p "$IMG_DIR/case-studies"

generate_image "Indian university digital transformation, students using tablets on modern campus lawn, smart building in background with digital screens visible, warm golden hour light" \
  "$IMG_DIR/case-studies/state-university-transformation.png"

generate_image "Business partnership meeting, executives shaking hands across conference table, presentation screen showing growth charts, modern corporate office, professional photography" \
  "$IMG_DIR/case-studies/industry-partnership.png"

generate_image "Government and tech professionals reviewing digital policy dashboard on large screen in modern meeting room, tablets and documents on table, professional corporate setting" \
  "$IMG_DIR/case-studies/policy-implementation.png"

# --- TEAM HEADSHOTS ---
echo ""
echo "--- Team Avatars (4) ---"
mkdir -p "$IMG_DIR/team"

generate_image "Professional corporate headshot portrait of a confident Indian male CEO in his 40s wearing a navy blue suit and tie, clean grey studio background, warm studio lighting, high quality portrait" \
  "$IMG_DIR/team/ceo.png"

generate_image "Professional corporate headshot portrait of an Indian female CTO in her 30s wearing professional business attire, warm confident smile, clean grey studio background, professional portrait photography" \
  "$IMG_DIR/team/cto.png"

generate_image "Professional corporate headshot portrait of an Indian male COO in his 40s wearing a light blue shirt with grey blazer, friendly expression, clean studio background, high quality portrait" \
  "$IMG_DIR/team/coo.png"

generate_image "Professional corporate headshot portrait of an Indian female education director in her 30s wearing elegant professional attire, warm approachable smile, clean studio background, portrait photography" \
  "$IMG_DIR/team/education-director.png"

echo ""
echo "=== Done! Verifying generated files ==="
echo ""
find "$IMG_DIR/gallery" "$IMG_DIR/blog" "$IMG_DIR/case-studies" "$IMG_DIR/team" -name "*.png" -exec ls -lh {} \; 2>/dev/null
