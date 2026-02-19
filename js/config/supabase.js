// Supabase Configuration
const SUPABASE_URL = 'https://jrplrlthsrviixxltjks.supabase.co/';
const SUPABASE_ANON_KEY = 'sb_publishable_4eunflzLg0I6-uhPwAf8LQ_tU3CP1iJ';

// Initialize Supabase Client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Format price in Indian Rupees
function formatPrice(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}

// Fetch all products
async function getAllProducts() {
    const { data, error } = await supabaseClient
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
    
    if (error) {
        console.error('Error fetching products:', error);
        return [];
    }
    return data;
}

// Fetch single product by ID
async function getProductById(id) {
    const { data, error } = await supabaseClient
        .from('products')
        .select('*')
        .eq('id', id)
        .single();
    
    if (error) {
        console.error('Error fetching product:', error);
        return null;
    }
    return data;
}

// Fetch products by category
async function getProductsByCategory(category) {
    const { data, error } = await supabaseClient
        .from('products')
        .select('*')
        .eq('category', category);
    
    if (error) {
        console.error('Error fetching products:', error);
        return [];
    }
    return data;
}

// Fetch featured products
async function getFeaturedProducts() {
    const { data, error } = await supabaseClient
        .from('products')
        .select('*')
        .eq('is_featured', true)
        .limit(8);
    
    if (error) {
        console.error('Error fetching featured products:', error);
        return [];
    }
    return data;
}

// Search products
async function searchProducts(searchTerm) {
    const { data, error } = await supabaseClient
        .from('products')
        .select('*')
        .or(`name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%,brand.ilike.%${searchTerm}%`);
    
    if (error) {
        console.error('Error searching products:', error);
        return [];
    }
    return data;
}

// Test connection
async function testConnection() {
    const { data, error } = await supabaseClient
        .from('products')
        .select('count');
    
    if (error) {
        console.error('❌ Supabase connection failed:', error);
    } else {
        console.log('✅ Supabase connected successfully!');
    }
}

// Run test on page load
testConnection();