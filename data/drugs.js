export const DRUGS = [
  {name: 'Propofol', brandName: 'Diprivan, Propoven', doses: [2, 2.5, 'mg/Kg', 'IV', 'mg'], typically: 2},
  {name: 'Etomidate', brandName: 'Amidate', doses: [0.2, 0.6, 'mg/Kg', 'IV', 'mg'], typically: 0.3},
  {name: 'Ketamin', brandName: 'Ketalar', doses: [1, 4.5, 'mg/Kg', 'IV', 'mg'], typically: 2},
  {name: 'Midazolam', brandName: 'Versed', doses: [0.3, 0.35, 'mg/Kg', 'IV', 'mg'], typically: 0.5},
  {name: 'Fentanyl', brandName: 'Fentanyl', doses: [1, 4, 'mcg/Kg', 'IV', 'mcg'], typically: 2},
  {name: 'Succinylcholine', brandName: '', doses: [0.5, 1.5, 'mg/Kg', 'IV', 'mg'], typically: 1.5},
  {name: 'Rocuronium', brandName: 'Esmeron', doses: [0.6, 1.2, 'mg/Kg', 'IV', 'mg'], typically: 0.6},
  {name: 'Vecuronium', brandName: 'Vecuronium', doses: [0.08, 0.1, 'mg/Kg', 'IV', 'mg'], typically: 0.08},
  {name: 'Cisatracurium', brandName: 'Cisatracurium', doses: [0.15, 0.2, 'mg/Kg', 'IV', 'mg'], typically: 0.15},
  {name: 'Neostigmine', brandName: '', doses: [0.03, 0.07, 'mg/Kg', 'IV', 'mg'], typically: 0.05},
]

export const DrugsList = [
  { class: 'Thuốc mê tĩnh mạch',
    drugs: ['Propofol (Diprivan)', 'Etomidate (Amidate)', 'Ketamin (Ketalar)', 'Dexmedetomidine (Precedex)', 'Barbituates - Thiopental (Pentothal, Brevital)']
  },
  {
    class: 'Benzodiazepines',
    drugs: ['Midazolam', 'Diazepam', 'Lorazepam']
  },
  {
    class: 'Opioids (Thuốc đối kháng: Naloxone)',
    drugs: ['Morphine', 'Fentanyl', 'Sufentanyl', 'Remifentanyl', 'Hydromorphone (Dilaudid)']
  },
  {
    class: 'Thuốc mê hô hấp',
    drugs: ['Isoflurane', 'Sevoflurane', 'Desflurane', 'Nitrous Oxide']
  },
  {
    class: 'Thuốc giãn cơ khử cực',
    drugs: ['Succinylcholine', 'Rocuronium']
  },
  {
    class: 'Thuốc giãn cơ không khử cực',
    drugs: ['Rocuronium (Esmeron)', 'Vecuronium', 'Cisatracurium']
  },
  {
    class: 'Thuốc giãn mạch',
    drugs: ['Nicardipine', 'Nitroprusside', 'Esmolol', 'Labetalol', 'Hydralazine']
  },
  {
    class: 'Thuốc vận mạch',
    drugs: ['Phenylephrine', 'Norepinephrine', 'Epinephrine', 'Dopamine', 'Dobutamine', 'Isoproterenol']
  }
]
