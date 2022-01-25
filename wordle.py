

banned_letters = 'arsebd'
banned = [l for l in banned_letters]

def not_letters(s, banned):
    for l in s:
        if l in banned:
          return False
    return True

words5 = sorted(words5)
print(f'words5 contains {len(words5)} words.')

d = {}

for w in words5:
    for c in w:
        if c in d:
          d[c] += 1
        else:
          d[c] = 1

# print(d)

most_used = sorted(d.items(), reverse=True, key=lambda x: x[1])

# print(most_used[:5])
def arose(w):
    pops = ["a", "r", "o", "s", "e"]
    for l in w:
        if l not in pops:
          return False
        else:
          pops.pop(pops.index(l))
    return True

most_used_letter_words = [w for w in words5 if arose(w)]
# print(most_used_letter_words)
# Shows the word 'arose' contains the five most common letters among all five-letter words.
# So first guess should be 'arose'

less_words = [w for w in words5 if not_letters(w, banned) \
  and w[2] == 'o' and w[1] != 'l' and 'l' in w and w[3] != 'n' and 'n' in w]
print(less_words)

# 2022-01-13: abbey (on fifth guess)
# 2022-01-14: tangy (on third guess)
# 2022-01-15: panic (on third guess)
# 2022-01-16: solar (on second guess)
# 2022-01-17: shire (on third guess)
# 2022-01-18: proxy (on fourth guess)
# 2022-01-19: point (on fourth guess)
# 2022-01-20: robot (on fifth guess)
# 2022-01-21: prick (on fifth guess)
# 2022-01-22: wince (on third guess)
# 2022-01-23: crimp (on third guess)

