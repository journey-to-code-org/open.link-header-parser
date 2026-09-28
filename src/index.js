export function parseLinkHeader(value) {
  if(typeof value!=="string")throw new TypeError("Expected value to be a string");
  const out=[];
  for(const part of value.split(/,(?=\s*<)/u)){
    const m=/^\s*<([^>]+)>\s*(.*)$/u.exec(part);
    if(!m)continue;
    const params={};
    for(const p of m[2].split(";")){
      const x=/^\s*([^=\s]+)\s*=\s*(?:"([^"]*)"|([^;\s]+))\s*$/u.exec(p);
      if(x)params[x[1]]=x[2]??x[3];
    }
    out.push({url:m[1],params});
  }
  return out;
}
export function linksByRel(value){const map={};for(const link of parseLinkHeader(value)){for(const rel of (link.params.rel??"").split(/\s+/u).filter(Boolean))map[rel]=link.url;}return map;}
