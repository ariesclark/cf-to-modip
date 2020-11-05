# CurseForge to MODIP
General repositiory for fetching and converting CurseForge projects into the MODIP format.

### Web API.
https://cf-modip.vercel.app/api/228756.modip.json

https://cf-modip.vercel.app/api/<curseforge_id>.modip.json

https://cf-modip.vercel.app/api/<curseforge_id>

#### Node.js CLI
```bash
git clone https://github.com/rubybb/cf-to-modip.git
cd cf-to-modip
node index.js --help
node index.js --id 238222
node index.js --web --port 3000
```

#### Vercel Deployment
```bash
vercel --prod
```