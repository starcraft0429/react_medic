let testdata = {
					'tableLabels': [
										'Abdominal / Back Pain',
										'Allergic Reaction',
										'Assault',
										'Breathing / Choking',
										'Cardiac',
										'Electrocution / Burns',
										'Environmental',
										'OBGYN',
										'OD / Poisoning',
										'Professional Request',
										'Seizure',
										'Sick Unknown',
										'Stroke / Headache',
										'Trauma',
										'Unconscious / Person Down',
										'Viral /Contagious',
										'Vehicular Incident',
										'Psyshiatric',
										'DLOC / Dizzy / Diabetic'
									],
							'MEDICs' :[
										'SPD-Reported "Excited Delirium"',
										'SPD-Overdose, confirmed',
										'Poisoning with ALS indicators'
									],
							'AIDs'  :[
										'SPD-Overdose, possible or suspected',
										'SPD-Overdose, received Narcan in the field, now awake',
										'Accidental ingestion of OTC or prescription meds',
										'Acute alcohol intoxication, DLOC',
										'Poisoning, symptoms not meeting Medic criteria'
									],
							'AMBs'   :[
										'Withdrawal symptoms, drugs or alcohol',
										'Request for Detox outside the Zone (made by patient, themselves)'
									],
						'indicators':[
										'Burns or swelling to neck, tongue or throat',
										'Respiratory difficulty',
										'Decreased LOC',
										'Advice from Poison Control for ALS evluation'
									],
						'examples'  :[
										'Person accidently took double dose of prescription meds',
										'Person misread dosage instructions and took more than prescribed or within too narrow time frame'
									],
						'consults'   :[
										'Name of medication',
										'Dosage',
										'Time taken',
										'Symptoms'
									],
						'arrivals'  :[
										'Do not take anything by mouth',
										'Do not induce vomiting',
										'If anything changes, call us back'
									],
						'historys'  :[
										{
											'time'	: '01/25/2017 06:32:08',
											'avatar': 'AMB',
											'content': 'Withdrawal symptoms, drugs or alcohol'
										},{
											'time'	: '01/25/2017 01:15:36',
											'avatar': 'AMB',
											'content': 'Withdrawal symptoms, drugs or alcohol'
										},{
											'time'	: '01/22/2017 17:40:21',
											'avatar': 'AID',
											'content': 'Acute alcohol intoxication, DLOC'
										},{
											'time'	: '01/21/2017 18:07:51',
											'avatar': 'AMB',
											'content': 'Withdrawal symptoms, drugs or alcohol'
										},{
											'time'	: '01/20/2017 06:07:22',
											'avatar': 'MED',
											'content': 'Poisoning with ALS indicators'
										}
									],
						'subscribes':[
										"Push hard, push fast. Place your hands, one on top of the other, in the middle of the chest. Use your body weight to help you administer compressions that are at least 2 inches deep and delivered at a rate of at least 100 compressions per minute.",
										"Deliver rescue breaths. With the person's head tilted back slightly and the chin lifted, pinch the nose shut and place your mouth over the person's mouth to make a complete seal. Blow into the person's mouth to make the chest rise. Deliver two rescue breaths, then continue compressions. <br/><br/> Note: If the chest does not rise with the initial rescue breath, re-tilt the head before delivering the second breath. If the chest doesn't rise with the second breath the person may be choking. After each subsequent se of 100 chest compressions, and before attempting breaths, look for an object and, if seen, remove it.",
										"continue CPR steps. Keep performing cycles of chest compressions and breathing until the person exhibis signs of life, such as breathing, an AED beacomes available, or EMS or a trained medical responder arrives on scene. <br/><br/> Note: End the cycles if the scene become unsafe or you cannot continue perofrming CPR due to exhaustion."
									]
				};

export default testdata;