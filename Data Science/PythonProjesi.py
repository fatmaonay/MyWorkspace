#Proje 1
"""
1- Bir listeyi düzleştiren (flatten) fonksiyon yazın. Elemanları birden çok katmanlı listelerden ([[3],2] gibi) oluşabileceği gibi, non-scalar verilerden de oluşabilir. Örnek olarak:

input: [[1,'a',['cat'],2],[[[3]],'dog'],4,5]

output: [1,'a','cat',2,3,'dog',4,5]
"""

lis = [[1,'a',['cat'],2],[[[3]],'dog'],4,5]
def flat(lis):
    flatList = []
    for element in lis:
        if type(element)==list:
            flatList += flat(element)
        else:
            flatList.append(element)
    return flatList

print("List", lis)
print("Flat List", flat(lis))


#Proje 2
"""
2- Verilen listenin içindeki elemanları tersine döndüren bir fonksiyon yazın. Eğer listenin içindeki elemanlar da liste içeriyorsa onların elemanlarını da tersine döndürün. Örnek olarak:

input: [[1, 2], [3, 4], [5, 6, 7]]

output: [[[7, 6, 5], [4, 3], [2, 1]]
"""

def reverse(x):
    x = x[::-1]
    x = [i[::-1] for i in x]
    return x

input = [[1, 2], [3, 4], [5, 6, 7]]
print(reverse(input))
