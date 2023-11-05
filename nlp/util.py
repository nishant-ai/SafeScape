import re
import spacy

crime_types = [
    "Arson",
    "Assault",
    "Burglary",
    "Car Theft",
    "Cybercrime",
    "Domestic Violence",
    "Drug Dealing",
    "Embezzlement",
    "Environmental Crimes",
    "Extortion",
    "Fraud",
    "Gang Activity",
    "Hate Crimes",
    "Homicide",
    "Human Trafficking",
    "Identity Theft",
    "Kidnapping",
    "Money Laundering",
    "Organized Crime",
    "Prostitution",
    "Public Intoxication",
    "Rape",
    "Robbery",
    "Sexual Assault",
    "Shoplifting",
    "Stalking",
    "Terrorism",
    "Vandalism",
    "White Collar Crimes",
    "Animal Cruelty",
    "Child Abuse",
    "Child Pornography",
    "Corruption",
    "Cyberbullying",
    "Drug Manufacturing",
    "Harassment",
    "Illegal Gambling",
    "Illegal Weapons Possession",
    "Narcotics Possession",
    "Online Scams",
    "Child Abduction",
    "Smuggling",
    "Trespassing",
    "Counterfeiting",
    "Environmental Pollution",
    "Insider Trading",
    "Robbery",
    "Theft",
    "Drug Trafficking",
    "Rioting",
    "Money Counterfeiting",
    "Blackmail",
    "Hit and Run",
    "Identity Fraud",
    "Identity Theft",
    "Piracy",
    "Hijacking",
    "Child Neglect",
    "Stolen Property",
    "Public Disorder",
    "Emotional Abuse",
    "Neglect",
    "Child Exploitation",
    "Child Labor Violations",
    "Animal Fighting",
    "Animal Neglect",
    "Animal Theft",
    "Environmental Degradation",
    "Illegal Dumping",
    "Stalking",
    "Bribery",
    "Perjury",
    "Obstruction of Justice",
    "Sexual Harassment",
    "Hazing",
    "Harassment",
    "Hate Speech",
    "Child Endangerment",
    "Criminal Mischief",
    "DUI (Driving Under the Influence)",
    "Environmental Vandalism",
    "Elder Abuse",
    "Forgery",
    "Money Smuggling",
    "Child Abandonment",
    "Organ Trafficking",
    "Privacy Invasion",
    "Sexual Exploitation",
    "Smuggling",
]

def find_strings_in_sentence(input_sentence, string_list):
    input_sentence = input_sentence.lower()  # Convert the input sentence to lowercase for case-insensitive matching

    # Create a regular expression pattern by joining the strings with the "|" (OR) operator
    pattern = "|".join(re.escape(search_string.lower()) for search_string in string_list)

    # Use re.findall to find all matches in the input sentence
    matches = re.findall(pattern, input_sentence)

    return matches

def give_tokens(text):
    entities = {} # Output Location

    # Get Crime Name Present in Sentence
    crimes = find_strings_in_sentence(text, crime_types)

    # Get Location
    trf = spacy.load("en_core_web_trf")
    tokens = trf(text)

    entity_group = ["GPE", "LOC"]

    for token in tokens:
        if token.ent_type_ in entity_group:
            entities[token.text] = token.ent_type_

    # Produce Output
    return entities, crimes

test_list = [
    "Homicide in Vikaspuri, Crimes going up daily",
    "No more safe to travel, killings increasing at the outskirts of Dehradun and Roorkee."
]

print(give_tokens(test_list[0]))