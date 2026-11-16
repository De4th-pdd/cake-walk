import json

transcript_path = r"C:\Users\INTEL\.gemini\antigravity\brain\0363fd3d-02eb-4749-89e5-8aa119492d5b\.system_generated\logs\transcript_full.jsonl"

with open(transcript_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        data = json.loads(line)
        c = str(data.get("content", ""))
        if "scontent.cdninstagram" in c:
            print(f"Step {i}: len={len(c)}")
            # print snippets
            import re
            for match in re.finditer(r'\{[^{}]*scontent[^{}]*\}', c):
                print(match.group(0)[:300])
