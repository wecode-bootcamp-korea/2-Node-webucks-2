select p.id, p.korean_name, p.english_name, c.name as categories_name, a.name as allergies_name,
n.caffeine, n.calories, n.fat, n.natrium, n.protein, n.sugars, i.image_url

from products p

left join categories c
on p.categories_id = c.id

left join nutritions n
on p.id = n.product_id

left join images i
on p.id = i.product_id

left join product_allergies
on p.id = product_allergies.product_id

left join allergies a
on a.id = product_allergies.allergies_id

where p.id = 1;

where p.id = 1;











-- select products.id, categories.name as categories_name, products.korean_name, products.english_name,
-- nutritions.caffeine, nutritions.calories, nutritions.fat, nutritions.natrium, nutritions.protein, nutritions.sugars,
-- allergies.name as allergies_name, images.image_url
-- from products

-- left join categories
-- on products.categories_id = categories.id

-- left join nutritions
-- on products.id = nutritions.product_id

-- left join images
-- on products.id = images.product_id

-- left join product_allergies
-- on products.id = product_allergies.product_id

-- left join allergies
-- on product_allergies.allergies_id = allergies.id

-- where products.id = 1;